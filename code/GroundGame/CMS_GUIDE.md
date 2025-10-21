# Ground Game CMS & RSS Integration Guide

## 🎉 New Features

Your Ground Game site now has:

1. **Automatic Grayzone RSS Feed** - Updates automatically when The Grayzone posts new stories
2. **Multi-Language CMS** - Journalists can publish in English, Spanish, Arabic, and Farsi
3. **Language Filtering** - Readers can filter articles by language on the homepage
4. **Article Management** - All articles stored and managed in one place

---

## 📰 For Journalists - How to Publish Articles

### Access the Admin Panel
- Click **"Publish Article"** in the navbar
- Or go to: `http://localhost:3000/admin`

### Publishing Steps

1. **Select Language**
   - English
   - Español (Spanish)
   - العربية (Arabic)
   - فارسی (Farsi)

2. **Enter Article Details**
   - **Title**: Main headline
   - **Author(s)**: Your name (e.g., "JOHN DOE AND JANE SMITH")
   - **Excerpt**: Brief summary (appears on homepage, ~200 chars)
   - **Full Content**: Complete article text
   - **Image URL** (optional): Link to featured image

3. **Click "Publish Article"**
   - Article appears instantly on homepage
   - Readers can filter by language
   - Ground Game articles are marked with blue badge

### Article Features
- Articles are sorted by date (newest first)
- Mixed with Grayzone articles automatically
- Each article gets its own page at `/article/[id]`
- Support for multiple paragraphs (use Enter/Return)
- Right-to-left text support for Arabic/Farsi

---

## 🔄 Automatic Grayzone Integration

### How It Works
- Homepage fetches latest stories from The Grayzone RSS feed
- Updates automatically when you refresh the page
- No manual updates needed
- Shows 10 most recent Grayzone articles
- Sorted chronologically with your custom articles

### What's Displayed
- Title
- Authors
- Publication date
- Excerpt
- Link to original article on thegrayzone.com

---

## 🌍 Multi-Language Support

### Homepage Language Filter
Readers can filter articles by:
- **All Languages** - Shows everything
- **English** - English only
- **Español** - Spanish only
- **العربية** - Arabic only
- **فارسی** - Farsi only

### Language Badges
- Each article card shows its language
- Color-coded badges for easy identification
- Ground Game articles get blue "Ground Game" badge
- Grayzone articles show only language

---

## 🗂️ Where Articles Are Stored

**File**: `/lib/articles.json`

This JSON file stores all your custom articles:
```json
{
  "articles": [
    {
      "id": "1234567890",
      "title": "Your Article Title",
      "authors": "AUTHOR NAME",
      "date": "October 21, 2025",
      "excerpt": "Brief summary...",
      "content": "Full article text...",
      "language": "en",
      "source": "ground-game",
      "createdAt": "2025-10-21T18:00:00.000Z"
    }
  ]
}
```

---

## 🔧 Technical Details

### API Endpoints

**Get Grayzone Articles**
```
GET /api/grayzone
```
Returns latest articles from The Grayzone RSS feed

**Get Custom Articles**
```
GET /api/articles
GET /api/articles?language=es
```
Returns your custom articles, optionally filtered by language

**Publish New Article**
```
POST /api/articles
Content-Type: application/json

{
  "title": "Article Title",
  "authors": "AUTHOR NAME",
  "excerpt": "Summary...",
  "content": "Full text...",
  "language": "en"
}
```

### File Structure
```
app/
├── admin/              # Journalist publishing panel
│   └── page.tsx
├── article/[id]/       # Individual article pages
│   └── page.tsx
├── api/
│   ├── grayzone/       # RSS feed endpoint
│   │   └── route.ts
│   └── articles/       # Custom articles API
│       └── route.ts
├── page.tsx            # Homepage (now with RSS)
lib/
└── articles.json       # Article storage
```

---

## 📝 Writing in Different Languages

### English Articles
- Standard left-to-right layout
- Use English language option

### Spanish Articles
- Use "Español" option
- Standard left-to-right layout
- Accented characters fully supported

### Arabic Articles
- Use "العربية" option
- Automatic right-to-left display
- Full Unicode support

### Farsi/Persian Articles
- Use "فارسی" option
- Automatic right-to-left display
- Full Persian script support

---

## 🚀 Going Live

### Current Setup (Development)
- Articles stored in local JSON file
- RSS fetches on each page load
- Good for testing and small teams

### Production Recommendations

For larger scale, consider:

1. **Database Migration**
   - Replace JSON with PostgreSQL/MongoDB
   - Use Prisma or Mongoose ORM
   - Better for multiple journalists

2. **Rich Text Editor**
   - Add markdown support
   - WYSIWYG editor (TinyMCE/Quill)
   - Image uploads

3. **Authentication**
   - Add login for admin panel
   - NextAuth.js integration
   - Role-based access (editor, writer, admin)

4. **Caching**
   - Cache Grayzone RSS for 5-10 minutes
   - Reduce API calls
   - Faster page loads

---

## 🔐 Security Notes

### Current Setup
- Admin panel is PUBLIC (no authentication)
- Anyone with the URL can publish
- Acceptable for trusted team in development

### For Production
**IMPORTANT**: Add authentication before going live!

Simple option:
```bash
npm install next-auth
```

Or use environment variable password:
- Check for password in admin panel
- Store in `.env.local`
- Don't commit to git

---

## 🎨 Customization Ideas

### Article Enhancements
- Add categories/tags
- Featured image uploads
- Author profiles
- Related articles
- Social sharing buttons

### Reader Features
- Search functionality
- Save to reading list
- Email newsletter signup
- Comments section

### Multi-Language
- Automatic translation suggestions
- Language-specific trending articles
- Multi-language article versions (same story, different languages)

---

## 📱 Mobile Experience

All features work on mobile:
- Responsive design
- Touch-friendly admin panel
- Mobile-optimized article reading
- Language selector works on phones

---

## 🆘 Troubleshooting

### Articles Not Showing
- Check `/lib/articles.json` exists
- Verify JSON is valid
- Check browser console for errors

### Grayzone Feed Not Loading
- Check internet connection
- Verify RSS feed URL is accessible
- Check API endpoint: `/api/grayzone`

### Language Filtering Not Working
- Ensure articles have `language` field
- Check dropdown value matches article language codes

### Can't Publish Articles
- Check file permissions on `/lib/articles.json`
- Verify API route is running
- Check browser console for errors

---

## 📞 Quick Reference

**Admin Panel**: `/admin`
**Homepage**: `/`
**Individual Article**: `/article/[id]`
**API Documentation**: See Technical Details section above

**Supported Languages**:
- `en` - English
- `es` - Español
- `ar` - العربية  
- `fa` - فارسی

---

**Happy Publishing! 📰✨**
