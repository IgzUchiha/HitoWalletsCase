# Get Email Notifications - 5 Minute Setup

## Step 1: Install Resend Package

```bash
npm install
```

## Step 2: Sign Up for Resend (FREE)

1. Go to **https://resend.com**
2. Click "Sign Up" - it's FREE (100 emails/day)
3. Verify your email

## Step 3: Get Your API Key

1. In Resend dashboard, click **"API Keys"**
2. Click **"Create API Key"**
3. Copy the key (starts with `re_`)

## Step 4: Add to Your .env File

Open your `.env` file and add these lines:

```env
# Email Notifications
RESEND_API_KEY=re_paste_your_key_here
ADMIN_EMAIL=bruh54167@gmail.com
FROM_EMAIL=orders@resend.dev
```

**Important:** Replace `re_paste_your_key_here` with the actual API key you copied!

## Step 5: Restart Server

Stop your server (Ctrl+C) and restart:

```bash
npm run dev
```

## ✅ Done!

Now when someone buys with **MetaMask OR Stripe**, you'll get an email at **bruh54167@gmail.com** with:

- Customer name
- Shipping address
- Email/phone
- Payment details
- Transaction info

The email will look like:

```
🎉 NEW ORDER!

📦 SHIP TO:
John Doe
123 Main St
San Francisco, CA 94102
United States

Customer Email: john@example.com
```

## Optional: Use Your Own Domain

For professional emails (like orders@hitocases.com):

1. In Resend dashboard, go to **"Domains"**
2. Add your domain
3. Add the DNS records they show you
4. Update FROM_EMAIL in .env to `orders@yourdomain.com`

## Testing

1. Make a test purchase with Stripe (use card 4242 4242 4242 4242)
2. Check your email at bruh54167@gmail.com
3. You should get the order details!

---

**Troubleshooting:**

- If no email comes, check browser console for errors
- Make sure you restarted the server after adding env variables
- Check spam folder
- Verify API key is correct in .env file
