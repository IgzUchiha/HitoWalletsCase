# Stripe Webhook Setup - Get Order Emails

Stripe payments happen on Stripe's servers, so they need to send order details back to you via webhooks.

## For Testing Locally (Development)

### Option 1: Stripe CLI (Recommended for Testing)

1. **Install Stripe CLI:**
   ```bash
   brew install stripe/stripe-cli/stripe
   ```

2. **Login to Stripe:**
   ```bash
   stripe login
   ```

3. **Forward webhooks to your local server:**
   ```bash
   stripe listen --forward-to localhost:3002/api/stripe-webhook
   ```
   
   You'll see: `Ready! Your webhook signing secret is whsec_xxxxx`

4. **Copy the webhook secret** (starts with `whsec_`) and add to your `.env`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_paste_the_secret_here
   ```

5. **Keep the terminal running** and test a payment!

---

## For Production (Live Website)

### Step 1: Deploy Your Website

Deploy to Vercel, Netlify, or your hosting platform first.

### Step 2: Add Webhook in Stripe Dashboard

1. Go to **https://dashboard.stripe.com/webhooks**
2. Click **"Add endpoint"**
3. Enter your webhook URL:
   ```
   https://your-website.com/api/stripe-webhook
   ```
4. Select events to listen for:
   - ✅ `checkout.session.completed`
5. Click **"Add endpoint"**

### Step 3: Get Webhook Secret

1. Click on the webhook you just created
2. Click **"Reveal"** under "Signing secret"
3. Copy the secret (starts with `whsec_`)
4. Add to your production environment variables:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_your_production_secret
   ```

---

## Testing

### With Stripe CLI Running:

1. Make sure `stripe listen` is running in a terminal
2. Go to your shop page
3. Click "Pay with Stripe"
4. Use test card: **4242 4242 4242 4242**
5. Fill out shipping address
6. Complete payment
7. **Check your email!** (bruh54167@gmail.com)

You should see the webhook event in your terminal:
```
✓ Received event: checkout.session.completed
```

And get an email with:
- Customer name
- Shipping address
- Phone
- Email
- Payment amount

---

## Current Status

Right now:
- ✅ **MetaMask payments** → Send emails immediately (no webhook needed)
- ❌ **Stripe payments** → Need webhook setup to get emails

Once webhook is configured:
- ✅ **Both payment methods** → Send emails to bruh54167@gmail.com

---

## Troubleshooting

**No webhook events coming through?**
- Make sure `stripe listen` is running
- Check your server is running on the correct port (3002)
- Verify STRIPE_WEBHOOK_SECRET is in .env
- Restart your dev server after adding the secret

**Webhook working but no email?**
- Add RESEND_API_KEY to .env (see EMAIL_SETUP_QUICK.md)
- Check server console logs for errors
- Make sure ADMIN_EMAIL is set to bruh54167@gmail.com

**Production webhooks not working?**
- Double-check webhook URL matches your deployed site
- Verify STRIPE_WEBHOOK_SECRET is set in production env vars
- Check webhook logs in Stripe dashboard
