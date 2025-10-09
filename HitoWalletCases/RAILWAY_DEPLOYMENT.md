# Deploy to Railway

## Step 1: Push Code to GitHub

Make sure your code is on GitHub first (your `.env` file won't be pushed - it's in `.gitignore`):

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

## Step 2: Sign Up for Railway

1. Go to **https://railway.app**
2. Sign up with GitHub (free tier available)

## Step 3: Create New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your `HitoWalletCases` repository
4. Railway will auto-detect it's a Next.js app

### Fix Build/Start Command Error

If you get an error about `buildCommand` and `startCommand` being the same:

1. Go to your project **Settings** in Railway
2. Under **Deploy** section, set:
   - **Build Command**: Leave empty (or `npm run build`)
   - **Start Command**: `npm start`
3. Click **Save**

The `railway.json` file in your repo will also help Railway auto-configure correctly.

## Step 4: Add Environment Variables

In Railway dashboard:

1. Click on your project
2. Go to **"Variables"** tab
3. Click **"Add Variable"** and add these one by one:

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key_here
STRIPE_SECRET_KEY=sk_live_your_live_secret_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# MetaMask
NEXT_PUBLIC_WALLET_ADDRESS=your_wallet_address_here

# Pricing
NEXT_PUBLIC_PRODUCT_PRICE_USD=49.99
NEXT_PUBLIC_PRODUCT_PRICE_ETH=0.025

# Email Notifications
RESEND_API_KEY=re_your_resend_key_here
ADMIN_EMAIL=bruh54167@gmail.com
FROM_EMAIL=orders@resend.dev
```

⚠️ **Important:** Use your **LIVE** Stripe keys for production, not test keys!

## Step 5: Deploy

Railway will automatically deploy. You'll get a URL like:
```
https://your-app-name.up.railway.app
```

## Step 6: Set Up Stripe Webhook (Production)

1. Go to **https://dashboard.stripe.com/webhooks**
2. Click **"Add endpoint"**
3. Enter your Railway URL:
   ```
   https://your-app-name.up.railway.app/api/stripe-webhook
   ```
4. Select event: `checkout.session.completed`
5. Click **"Add endpoint"**
6. Copy the **webhook signing secret** (starts with `whsec_`)
7. Add it to Railway variables as `STRIPE_WEBHOOK_SECRET`

## Step 7: Test Your Live Site

1. Visit your Railway URL
2. Make a test purchase with a real card (or Stripe test mode)
3. Check your email at **bruh54167@gmail.com**
4. You should get order details!

---

## Important Notes

### Stock Management
⚠️ Your current inventory (30 cases) is **in-memory** and will reset when Railway restarts the server.

For production, you'll want to:
- Add a database (Railway offers PostgreSQL)
- Store inventory count in database
- Or connect your Rust backend later

### Custom Domain (Optional)
1. In Railway dashboard, go to **"Settings"**
2. Add your custom domain
3. Update DNS records as shown

### Environment Variables Security
✅ Your `.env` file is in `.gitignore` - it never gets pushed to GitHub
✅ You manually add secrets in Railway dashboard
✅ Railway keeps environment variables encrypted

---

## Deployment Checklist

Before going live:

- [ ] Test with Stripe live mode (real card)
- [ ] Test MetaMask payments on mainnet
- [ ] Verify emails arrive at bruh54167@gmail.com
- [ ] Test shipping address collection
- [ ] Check stock decreases after purchase
- [ ] Add product images (IMG_1878.jpg and IMG_1879.jpeg)
- [ ] Update contact info if needed
- [ ] Consider adding database for inventory

---

## Automatic Deploys

Railway automatically redeploys when you push to GitHub:

```bash
git add .
git commit -m "Update product info"
git push
```

Railway detects the push and redeploys automatically! 🚀

---

## Cost

Railway free tier includes:
- $5 credit per month
- Should be enough for low-traffic stores
- Upgrade to hobby plan ($5/month) for more resources

---

## Alternative: Vercel

If you prefer Vercel:

```bash
npm install -g vercel
vercel
```

Follow prompts, then add environment variables in Vercel dashboard.

Both Railway and Vercel work great for Next.js!
