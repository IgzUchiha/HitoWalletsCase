import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event: Stripe.Event;

  try {
    if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
      console.log("No webhook secret configured");
      return NextResponse.json({ received: true });
    }

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Get full session details with shipping info
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ["customer", "line_items"],
    });

    const orderData = {
      paymentMethod: "Stripe",
      sessionId: fullSession.id,
      customerEmail: fullSession.customer_details?.email,
      customerName: fullSession.customer_details?.name,
      customerPhone: fullSession.customer_details?.phone,
      shipping: {
        name: fullSession.shipping_details?.name || fullSession.customer_details?.name,
        address: fullSession.shipping_details?.address?.line1,
        address2: fullSession.shipping_details?.address?.line2,
        city: fullSession.shipping_details?.address?.city,
        state: fullSession.shipping_details?.address?.state,
        zip: fullSession.shipping_details?.address?.postal_code,
        country: fullSession.shipping_details?.address?.country,
      },
      amount: fullSession.amount_total ? fullSession.amount_total / 100 : 0,
      currency: fullSession.currency?.toUpperCase(),
      timestamp: new Date().toISOString(),
    };

    console.log("=== NEW STRIPE ORDER ===");
    console.log(JSON.stringify(orderData, null, 2));
    console.log("========================");

    // Send email notification
    try {
      await fetch(`${req.headers.get("origin")}/api/send-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
    }
  }

  return NextResponse.json({ received: true });
}
