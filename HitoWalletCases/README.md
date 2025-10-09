# Hito Wallet Cases - E-Commerce Store

A modern Next.js e-commerce website for selling premium wallet cases with MetaMask (crypto) and Stripe (credit card) payment options.

## Features

- 🎨 Modern, responsive design with TailwindCSS
- 🔐 MetaMask integration for crypto payments (ETH)
- 💳 Stripe integration for credit card payments
- 📱 Mobile-friendly interface
- 🛒 Real-time inventory management (30 cases available)
- 📧 Contact page for customer inquiries

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MetaMask wallet (for crypto payments)
- Stripe account (for card payments)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your:
- Stripe publishable and secret keys
- Your MetaMask wallet address for receiving payments
- Product pricing

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key
- `STRIPE_SECRET_KEY` - Your Stripe secret key
- `NEXT_PUBLIC_WALLET_ADDRESS` - Your MetaMask wallet address to receive ETH
- `NEXT_PUBLIC_PRODUCT_PRICE_USD` - Price in USD (default: 49.99)
- `NEXT_PUBLIC_PRODUCT_PRICE_ETH` - Price in ETH (default: 0.025)

## Project Structure

```
├── app/
│   ├── page.tsx              # Landing page
│   ├── shop/page.tsx         # Shopping page
│   ├── contact/page.tsx      # Contact page
│   ├── layout.tsx            # Root layout
│   └── api/
│       └── checkout/route.ts # Stripe checkout API
├── components/
│   ├── Navbar.tsx            # Navigation component
│   ├── Hero.tsx              # Hero section
│   ├── ProductCard.tsx       # Product display
│   └── PaymentModal.tsx      # Payment selection modal
├── lib/
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## Payment Integration

### MetaMask (Crypto)
- Customers can pay with ETH directly from their MetaMask wallet
- Transactions are processed on the Ethereum network
- Update `NEXT_PUBLIC_WALLET_ADDRESS` with your receiving address

### Stripe (Credit Card)
- Secure credit card processing through Stripe
- Requires Stripe account and API keys
- Get your keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

## Order Notifications

Currently, orders are logged to the browser console after MetaMask payments. To receive email notifications:

1. Check **EMAIL_SETUP.md** for detailed instructions
2. Recommended: Use Resend (free, easy setup)
3. Orders include full shipping details automatically

## Future Enhancements

- [ ] Rust backend for inventory management
- [ ] Database integration for order tracking
- [x] Order logging with shipping details
- [ ] Multiple product variants
- [ ] Shopping cart functionality
- [ ] User accounts and order history

## License

MIT
