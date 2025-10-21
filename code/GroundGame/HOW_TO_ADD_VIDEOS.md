# 📺 How to Add Real Videos to Your Videos Page

## Quick Steps

### 1. Find Videos on YouTube

**The Grayzone:**
- Go to: https://www.youtube.com/@thegrayzone7996/videos
- Browse their latest videos

**Jimmy Dore Show:**
- Go to: https://www.youtube.com/@thejimmydoreshow/videos
- Browse their latest videos

### 2. Get the Video ID

When you find a video you want to feature:

1. Click on the video
2. Look at the URL in your browser: `youtube.com/watch?v=ABC123xyz`
3. The video ID is the part after `v=` → **ABC123xyz**

**Examples:**
- URL: `youtube.com/watch?v=kOEI5kF9Gzs`
- ID: `kOEI5kF9Gzs`

### 3. Update the Videos Page

Open this file: `/Users/igmercastillo/code/GroundGame/app/videos/page.tsx`

Find the placeholder entries like:
```javascript
{
  id: 'GRAYZONE_VIDEO_ID_1',
  title: 'The Grayzone: [Add Title Here]',
  description: 'Add description from The Grayzone video',
  source: 'The Grayzone'
}
```

Replace with real information:
```javascript
{
  id: 'ABC123xyz',  // ← Real video ID
  title: 'The Grayzone: US Proxy War in Syria',  // ← Real title
  description: 'Max Blumenthal reports on US intervention',  // ← Real description
  source: 'The Grayzone'
}
```

### 4. Save and Refresh

- Save the file
- Refresh your browser at `http://localhost:3000/videos`
- The real videos will now appear!

---

## Example: Adding a Grayzone Video

**Step 1:** Go to The Grayzone channel
**Step 2:** Click on "Israel's genocide in Gaza" video
**Step 3:** URL shows: `youtube.com/watch?v=dQw4w9WgXcQ`
**Step 4:** Copy the ID: `dQw4w9WgXcQ`
**Step 5:** Update the code:

```javascript
{
  id: 'dQw4w9WgXcQ',
  title: 'The Grayzone: Israel\'s genocide in Gaza',
  description: 'Comprehensive investigation into Israeli war crimes',
  source: 'The Grayzone'
}
```

---

## Example: Adding a Jimmy Dore Video

**Step 1:** Go to Jimmy Dore Show channel
**Step 2:** Click on "Media Lies About Ukraine" video
**Step 3:** URL shows: `youtube.com/watch?v=xyz789ABC`
**Step 4:** Copy the ID: `xyz789ABC`
**Step 5:** Update the code:

```javascript
{
  id: 'xyz789ABC',
  title: 'The Jimmy Dore Show: Media Lies About Ukraine',
  description: 'Jimmy exposes mainstream media propaganda',
  source: 'Jimmy Dore Show'
}
```

---

## Adding More Videos

You can add as many videos as you want! Just copy the format:

```javascript
const videos = [
  // Your featured video (keep this)
  {
    id: 'kOEI5kF9Gzs',
    title: 'Ground Game Featured Report',
    description: 'Our featured investigative report',
    source: 'Ground Game'
  },
  
  // Add more Grayzone videos
  {
    id: 'VIDEO_ID_HERE',
    title: 'The Grayzone: Title',
    description: 'Description',
    source: 'The Grayzone'
  },
  
  // Add more Jimmy Dore videos
  {
    id: 'VIDEO_ID_HERE',
    title: 'The Jimmy Dore Show: Title',
    description: 'Description',
    source: 'Jimmy Dore Show'
  },
  
  // Add as many as you want!
];
```

---

## Tips

✅ **Good practices:**
- Keep titles descriptive
- Write compelling descriptions
- Mix content from different sources
- Update regularly with latest videos

❌ **Avoid:**
- Using invalid video IDs
- Copying full URLs (just use the ID)
- Leaving placeholder IDs

---

## Source Badges

Videos automatically get colored badges:
- 🔴 **Red** = Ground Game
- ⚫ **Gray** = The Grayzone
- 🔵 **Blue** = Jimmy Dore Show

---

## Need Help?

If a video doesn't load:
1. Check the video ID is correct
2. Make sure the video is public (not private/unlisted)
3. Verify you copied only the ID, not the full URL

**File to edit:** `/app/videos/page.tsx`

Happy curating! 🎬
