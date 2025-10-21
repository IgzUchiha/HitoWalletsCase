# Ground Game - Alternative News Media Outlet

## 🚀 Quick Start

Your Ground Game news outlet is ready! The development server should be running at: http://localhost:3000

If not started yet, run:
```bash
npm run dev
```

## 📝 Customization Checklist

### 1. **YouTube Videos**
Update the video IDs in these files:

**Homepage Featured Video** (`app/page.tsx` line 58):
```typescript
src="https://www.youtube.com/embed/YOUR_FEATURED_VIDEO_ID"
```

**Videos Page** (`app/videos/page.tsx` lines 6-33):
Replace `VIDEO_ID_1`, `VIDEO_ID_2`, etc. with your actual YouTube video IDs.

To get a YouTube video ID:
- Go to your video on YouTube
- The ID is in the URL: `youtube.com/watch?v=VIDEO_ID_HERE`
- Use just the ID part (e.g., `dQw4w9WgXcQ`)

### 2. **Crypto Wallet Addresses**
Update your donation addresses in `app/donations/page.tsx` (lines 10-11):

```typescript
const bitcoinAddress = 'YOUR_BITCOIN_ADDRESS_HERE';
const ethereumAddress = 'YOUR_ETHEREUM_ADDRESS_HERE';
```

### 3. **Social Media Links**
Update social media URLs in `components/Navbar.tsx` (lines 63-86):

```typescript
href="https://twitter.com/your-handle"      // Line 65
href="https://instagram.com/your-handle"    // Line 72
href="https://youtube.com/@your-channel"    // Line 79
href="https://t.me/your-channel"           // Line 86
```

Also update the YouTube link in `app/videos/page.tsx` (line 39):
```typescript
href="https://youtube.com/@your-channel"
```

### 4. **Articles**
The homepage displays articles from The Grayzone. To add your own articles:

Edit `app/page.tsx` (lines 3-46) and add new article objects:

```typescript
{
  title: "Your Article Title",
  authors: "AUTHOR NAME",
  date: "DATE",
  excerpt: "Brief description...",
  url: "https://your-article-url.com"
}
```

## 🌐 Features Implemented

✅ **Navigation Bar** with:
- Language selector (English, Español, العربية, فارسی)
- Links to Videos and Donations pages
- Social media icons (Twitter, Instagram, YouTube, Telegram)

✅ **Homepage** with:
- Featured YouTube video embed
- Grid of latest articles
- Call-to-action donation section

✅ **Videos Page** with:
- Multiple YouTube video embeds
- Responsive grid layout
- Subscribe button

✅ **Donations Page** with:
- Bitcoin and Ethereum addresses
- Copy-to-clipboard functionality
- Security notice

✅ **Responsive Design**:
- Mobile-friendly layout
- Dark theme (black/gray/red color scheme)
- Hover effects and transitions

## 🎨 Color Scheme

- Background: Gray-900 (#111827)
- Cards: Gray-800 (#1F2937)
- Accent: Red-600 (#DC2626)
- Text: White

## 📦 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: react-icons, lucide-react

## 🔧 Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌍 Multi-language Support

The language selector is currently a UI element. To implement full translation:

1. Install `next-intl` or `react-i18next`
2. Create translation files for each language
3. Connect the language selector to the translation system

## 📱 Mobile Menu

The mobile hamburger menu button is present but needs functionality. To implement:

Add state management to toggle mobile menu visibility and show/hide navigation items.

## 🚀 Deployment

Deploy to Vercel (recommended for Next.js):

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or use the Vercel dashboard to connect your GitHub repository.

## 📄 License

This is your project - use it however you like!

---

**Need help?** Check the Next.js documentation at https://nextjs.org/docs
