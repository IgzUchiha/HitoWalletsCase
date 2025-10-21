# 🗑️ Article Management Guide

## Delete Articles Feature

Your admin panel now includes article management capabilities!

---

## How to Access

1. Log in to the admin panel: `/admin`
2. Enter your password
3. Scroll down past the "Publish New Article" section
4. Click **"Show Articles"** button under "MANAGE ARTICLES"

---

## Features

### View All Articles
- See all your published Ground Game articles
- Each article shows:
  - Language badge
  - Publication date
  - Title
  - Author name
  - Excerpt preview

### Delete Articles
1. Click the **"Delete"** button on any article
2. Confirm the deletion in the popup
3. Article is permanently removed from the site
4. ⚠️ **Cannot be undone!**

### View Articles
- Click **"View"** button to see the live article in a new tab
- Check how it looks to readers before deciding to delete

---

## Important Notes

### ⚠️ Deletion is Permanent
- Once deleted, the article **cannot be recovered**
- It will be removed from:
  - Homepage
  - Articles list
  - Direct URL access
  - RSS feed (next refresh)

### 🔒 Admin-Only Access
- Only logged-in admins can delete articles
- Password required to access management panel
- Regular visitors cannot delete anything

### 📝 What Gets Deleted
- Article content
- Title, authors, excerpts
- All metadata
- But NOT Grayzone articles (those are from RSS feed)

---

## Use Cases

**When to Delete Articles:**
- Factual errors that can't be corrected
- Duplicate articles
- Test articles
- Content that needs to be taken down
- Outdated information

**Better Alternatives:**
- For corrections: Edit the article in `lib/articles.json`
- For updates: Publish a new article with updated info
- For retractions: Consider adding an update note instead

---

## How It Works Technically

### API Endpoint
```
DELETE /api/articles?id={article_id}
```

### Storage
Articles are stored in: `/lib/articles.json`

When you delete:
1. API receives the article ID
2. Reads the JSON file
3. Filters out the deleted article
4. Saves the updated list
5. Article disappears immediately

### Can't Delete
- Grayzone articles (they're from RSS, not stored locally)
- Articles without an ID
- Articles from other sources

---

## Tips

### Before Deleting
- [ ] View the article to confirm it's the right one
- [ ] Consider if you need to archive it elsewhere
- [ ] Check if you can edit instead of delete
- [ ] Make sure team members don't need it

### After Deleting
- Refresh the homepage to confirm removal
- Check that the article URL returns 404
- List automatically refreshes in admin panel

---

## Troubleshooting

**"Article not found" error**
- Article may have been already deleted
- Refresh the page and try again

**Delete button not working**
- Check browser console for errors
- Make sure you're logged in
- Try refreshing the page

**Article still appears on homepage**
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check if it's a Grayzone article (can't delete those)

---

## Security

- Only authenticated admins can delete
- Confirmation popup prevents accidental deletion
- No way to bulk-delete (prevents accidents)
- Deletion is logged in server console

---

## Future Enhancements

Consider adding:
- Edit functionality (instead of delete + republish)
- Archive instead of delete
- Restore deleted articles (trash/recycle bin)
- Bulk operations
- Search/filter articles
- Sort by date, language, author

---

**Location:** `/admin` → Scroll to "MANAGE ARTICLES"

**Stay safe!** Always confirm before deleting. ⚠️
