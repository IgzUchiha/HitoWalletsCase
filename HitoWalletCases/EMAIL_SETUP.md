# Email Notification Setup

Right now, order details are logged to the console. To receive order notifications via email, follow these steps:

## Option 1: Resend (Recommended - Easy & Free)

Resend is a modern email API that's super easy to set up.

### Step 1: Sign Up for Resend
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)

### Step 2: Get API Key
1. Go to **API Keys** in dashboard
2. Click **Create API Key**
3. Copy the API key

### Step 3: Install Package
```bash
npm install resend
```

### Step 4: Add to Environment Variables
Edit your `.env` file:
```env
RESEND_API_KEY=re_your_api_key_here
ADMIN_EMAIL=bruh54167@gmail.com
```

### Step 5: Update API Route
Edit `/app/api/send-order/route.ts` and uncomment the Resend section:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'orders@hitocases.com', // Use your verified domain
  to: process.env.ADMIN_EMAIL || 'bruh54167@gmail.com',
  subject: `New Order - ${orderData.product}`,
  text: emailContent,
});
```

### Step 6: Verify Domain (Optional but Recommended)
1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., `hitocases.com`)
3. Add the DNS records they provide
4. Wait for verification

---

## Option 2: SendGrid (Popular Alternative)

### Step 1: Sign Up for SendGrid
1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up (100 emails/day free)

### Step 2: Get API Key
1. Go to **Settings** → **API Keys**
2. Create new API key
3. Copy the key

### Step 3: Install Package
```bash
npm install @sendgrid/mail
```

### Step 4: Add to Environment Variables
```env
SENDGRID_API_KEY=SG.your_api_key_here
ADMIN_EMAIL=bruh54167@gmail.com
```

### Step 5: Update API Route
Uncomment the SendGrid section in `/app/api/send-order/route.ts`

---

## Option 3: Gmail SMTP (Free but Complex)

If you want to use Gmail:

### Install Nodemailer
```bash
npm install nodemailer
```

### Enable App Password
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Create App Password
4. Copy the password

### Add to .env
```env
GMAIL_USER=bruh54167@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
ADMIN_EMAIL=bruh54167@gmail.com
```

### Update API Route
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: process.env.ADMIN_EMAIL,
  subject: `New Order - ${orderData.product}`,
  text: emailContent,
});
```

---

## For Now (No Setup Required)

Until you set up email:
1. **Check Browser Console** (F12 → Console tab) after each purchase
2. Order details are logged with all shipping info
3. Copy the info manually

The order info looks like:
```
=== NEW ORDER ===
{
  "transactionHash": "0x123...",
  "customerWallet": "0xabc...",
  "product": "Premium Hito Wallet Case",
  "price": 0.025,
  "priceUSD": 49.99,
  "shipping": {
    "name": "John Doe",
    "email": "john@example.com",
    "address": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94102",
    "country": "United States"
  },
  "timestamp": "2025-10-09T13:00:00.000Z"
}
```

---

## Recommended: Resend

I recommend **Resend** because:
- ✅ Free tier (100 emails/day)
- ✅ Simple API
- ✅ Modern and reliable
- ✅ Easy domain verification
- ✅ Takes 5 minutes to set up

Once configured, you'll automatically get an email every time someone buys with MetaMask! 📧
