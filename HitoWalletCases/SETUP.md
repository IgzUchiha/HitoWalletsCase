# Setup Guide

## Quick Start

Your Next.js e-commerce website is ready! Follow these steps to get started:

### 1. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then edit `.env` and add your keys:

```env
# Stripe Keys (Get from https://dashboard.stripe.com/apikeys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_here

# Your MetaMask Wallet Address (where you'll receive ETH payments)
NEXT_PUBLIC_WALLET_ADDRESS=0xYourWalletAddressHere

# Product Pricing
NEXT_PUBLIC_PRODUCT_PRICE_USD=49.99
NEXT_PUBLIC_PRODUCT_PRICE_ETH=0.025
```

### 2. Get Your Stripe API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/register)
2. Create a free account (or login)
3. Navigate to **Developers** → **API Keys**
4. Copy your **Publishable key** and **Secret key**
5. Use the **test mode** keys for development (they start with `pk_test_` and `sk_test_`)

### 3. Set Up Your MetaMask Wallet

1. Install [MetaMask](https://metamask.io/) browser extension
2. Create or import a wallet
3. Copy your wallet address (e.g., `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`)
4. Add this address to your `.env` file
5. For testing, use a testnet like Sepolia or Goerli

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Add Your Product Image (Optional)

- Add your wallet case image to `/public/wallet-case.jpg`
- Recommended size: 1000x1000px (square aspect ratio)

## Testing Payments

### Credit Card (Stripe Test Mode)

Use these test card numbers:
- **Success**: `4242 4242 4242 4242`
- **Requires authentication**: `4000 0027 6000 3184`
- Any future expiry date, any 3-digit CVC

### MetaMask (Testnet)

1. Switch MetaMask to a testnet (e.g., Sepolia)
2. Get free test ETH from a faucet:
   - [Sepolia Faucet](https://sepoliafaucet.com/)
   - [Goerli Faucet](https://goerlifaucet.com/)
3. Test the crypto payment flow

## Project Structure

```
HitoWalletCases/
├── app/
│   ├── page.tsx              # Landing page
│   ├── shop/page.tsx         # Product page
│   ├── contact/page.tsx      # Contact form
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── api/
│       └── checkout/route.ts # Stripe API endpoint
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── ProductCard.tsx       # Product display
│   └── PaymentModal.tsx      # Payment selection
├── lib/
│   ├── utils.ts              # Utility functions
│   └── inventory.ts          # Stock management (30 cases)
├── public/                   # Static files
└── package.json              # Dependencies

```

## Features Implemented

✅ **Landing Page**: Beautiful hero section with product info  
✅ **Shopping Page**: Product display with features and pricing  
✅ **Contact Page**: Contact form with business information  
✅ **Responsive Navbar**: Mobile-friendly navigation  
✅ **MetaMask Integration**: Crypto payments with ETH  
✅ **Stripe Integration**: Credit card payments  
✅ **Inventory Management**: Track 30 available cases  
✅ **Modern UI**: TailwindCSS with beautiful components  
✅ **TypeScript**: Full type safety  

## Next Steps

### For Production:

1. **Get Production Stripe Keys**: Switch from test to live mode keys
2. **Use Mainnet**: Switch MetaMask to Ethereum mainnet for real transactions
3. **Add Product Images**: Replace placeholder with actual photos
4. **Database Integration**: Replace in-memory inventory with Rust backend
5. **Email Notifications**: Set up order confirmation emails
6. **Deploy**: Use Vercel, Netlify, or your preferred platform

### Deployment (Vercel - Recommended):

```bash
npm run build  # Test production build locally
npx vercel     # Deploy to Vercel
```

Then add your environment variables in the Vercel dashboard.

## Troubleshooting

### Stripe not working?
- Make sure both publishable and secret keys are in `.env`
- Restart the dev server after changing `.env`
- Check browser console for errors

### MetaMask not connecting?
- Ensure MetaMask extension is installed
- Check that you're on the correct network
- Make sure your wallet address is in `.env`

### Port 3000 already in use?
```bash
npm run dev -- -p 3001  # Use different port
```

## Support

Need help? Check the main README.md or contact support.

## Future Enhancements

- [ ] Rust backend for order processing
- [ ] PostgreSQL database for order history
- [ ] Email notifications with SendGrid/Mailgun
- [ ] Multiple product variants (colors, sizes)
- [ ] Shopping cart for multiple items
- [ ] Customer accounts and authentication
- [ ] Order tracking dashboard
- [ ] Inventory sync with Rust backend
