# Quick Start Guide

## ✅ Your Website is Ready!

Everything is set up. Here's what you have:

### Features Implemented:
- ✅ Landing page with image carousel (2 product images)
- ✅ Shop page with product details
- ✅ Contact page with email (bruh54167@gmail.com) and address (ZO House SF)
- ✅ MetaMask payment with shipping form
- ✅ Stripe payment integration
- ✅ Stock management (starts at 30, decreases after each sale)
- ✅ Order logging with full shipping details
- ✅ Green color theme

### To Run the Website:

```bash
npm run dev
```

Then open: **http://localhost:3000**

### Color Change Note:
After starting the server, you'll see the **green color theme** instead of blue!

---

## Testing Payments

### MetaMask (Crypto):
1. Use **Sepolia testnet** or another test network
2. Get free test ETH from a faucet
3. Customer fills shipping form → pays with MetaMask
4. **Check browser console (F12)** to see order details

### Stripe (Credit Card):
1. Use test card: **4242 4242 4242 4242**
2. Any future date, any CVC
3. Stripe handles shipping collection automatically

---

## After Each Sale:

1. **Open browser console** (F12 → Console tab)
2. Look for: `=== NEW ORDER ===`
3. Copy customer's shipping info:
   - Name
   - Email
   - Address
   - City, State, ZIP

4. **Ship the wallet case!** 📦

---

## Current Inventory:
- **30 cases** ready to ship
- Stock decreases automatically after each MetaMask purchase
- Resets to 30 if you restart the server

---

## Environment Variables Set:
✅ Stripe keys
✅ MetaMask wallet address
✅ Product pricing ($49.99 USD / 0.025 ETH)

---

## Optional: Email Notifications

To get orders sent to your email instead of checking console:
- See **EMAIL_SETUP.md** for instructions
- Recommended: Resend (5-minute setup)

---

## Your Store is Live! 🎉

Run `npm run dev` and start selling your 3D printed wallet cases!
