import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const orderData = await req.json();

    // Build email content based on payment method
    let emailContent = "";
    let emailSubject = "";

    if (orderData.paymentMethod === "Stripe") {
      // Stripe order
      emailSubject = `🛍️ New Stripe Order - ${orderData.amount} ${orderData.currency}`;
      emailContent = `
🎉 NEW STRIPE ORDER!

Payment Details:
- Session ID: ${orderData.sessionId}
- Amount: ${orderData.amount} ${orderData.currency}
- Customer Email: ${orderData.customerEmail}
- Customer Phone: ${orderData.customerPhone || 'N/A'}

📦 SHIP TO:
${orderData.shipping.name}
${orderData.shipping.address}${orderData.shipping.address2 ? '\n' + orderData.shipping.address2 : ''}
${orderData.shipping.city}, ${orderData.shipping.state} ${orderData.shipping.zip}
${orderData.shipping.country}

Order Time: ${orderData.timestamp}
      `;
    } else {
      // MetaMask order
      emailSubject = `🦊 New MetaMask Order - ${orderData.product}`;
      emailContent = `
🎉 NEW METAMASK ORDER!

Transaction Details:
- Transaction Hash: ${orderData.transactionHash}
- Customer Wallet: ${orderData.customerWallet}
- Product: ${orderData.product}
- Price: ${orderData.price} ETH (~$${orderData.priceUSD || 'N/A'})

📦 SHIP TO:
${orderData.shipping.name}
${orderData.shipping.email}
${orderData.shipping.address}
${orderData.shipping.city}, ${orderData.shipping.state} ${orderData.shipping.zip}
${orderData.shipping.country}

Order Time: ${orderData.timestamp}
      `;
    }

    console.log("=== EMAIL NOTIFICATION ===");
    console.log(emailContent);
    console.log("==========================");

    // Send email with Resend
    if (process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: process.env.FROM_EMAIL || 'orders@resend.dev', // Use resend.dev for testing
          to: process.env.ADMIN_EMAIL,
          subject: emailSubject,
          text: emailContent,
        });

        console.log("✅ Email sent successfully!");
        return NextResponse.json({ 
          success: true, 
          message: "Order notification sent via email" 
        });
      } catch (emailError: any) {
        console.error("Email send error:", emailError);
        // Continue even if email fails
      }
    }

    // If no email config, just log
    return NextResponse.json({ 
      success: true, 
      message: "Order logged (configure RESEND_API_KEY and ADMIN_EMAIL in .env to receive emails)" 
    });

  } catch (error: any) {
    console.error("Error processing order:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process order" },
      { status: 500 }
    );
  }
}
