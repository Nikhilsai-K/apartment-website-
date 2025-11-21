# 🚀 Quick Start Guide

Get your beautiful apartment website up and running in 5 minutes!

## Step 1: Check Your Files ✅

Make sure you have these files:
```
apartment-website/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── images/
    └── video/
```

## Step 2: Add Your Assets 📸

### Minimum Required (to get started):

1. **Add at least 1 image** to `assets/images/`:
   - Name it `hero-fallback.jpg`
   - This will be your main background

2. **Add placeholder images** for the gallery:
   - `interior-1.jpg`
   - `interior-2.jpg`
   - `interior-3.jpg`
   - `exterior-1.jpg`
   - `exterior-2.jpg`
   - `common-area.jpg`

3. **Videos are optional** for now:
   - The site will use fallback images if videos are missing
   - Add later: `apartment-hero.mp4` and `apartment-interior.mp4`

## Step 3: Open the Website 🌐

### Option A: Double-Click
Simply double-click `index.html` to open in your browser

### Option B: Use a Local Server (Recommended)

**Using Python:**
```bash
# Navigate to the folder
cd path/to/apartment-website

# Start server (Python 3)
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

**Using Node.js:**
```bash
npx http-server
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## Step 4: Customize Your Content ✏️

Edit `index.html` to update:

### Hero Title (Line ~33-34)
```html
<span class="title-main">ザ・パークハウス東銀座</span>
<span class="title-sub">THE PARK HOUSE HIGASHI-GINZA</span>
```

### About Section (Line ~80-85)
Update the description text to match your apartment

### Location Section (Line ~180-220)
Update station names and walking times

### Price Section (Line ~145-165)
Update pricing information

## Step 5: Customize Colors 🎨

Edit `styles.css` at the top (lines 8-16):

```css
:root {
    --primary-color: #1a1a1a;      /* Dark backgrounds */
    --secondary-color: #d4af37;     /* Gold accent - CHANGE THIS! */
    --accent-color: #8b7355;        /* Brown accent */
    --text-light: #ffffff;          /* Light text */
    --text-dark: #333333;           /* Dark text */
}
```

### Popular Color Schemes:

**Luxury Gold** (current):
```css
--secondary-color: #d4af37;
--accent-color: #8b7355;
```

**Modern Blue**:
```css
--secondary-color: #3498db;
--accent-color: #2980b9;
```

**Elegant Purple**:
```css
--secondary-color: #9b59b6;
--accent-color: #8e44ad;
```

**Minimalist Green**:
```css
--secondary-color: #27ae60;
--accent-color: #229954;
```

**Tokyo Red**:
```css
--secondary-color: #e74c3c;
--accent-color: #c0392b;
```

## Step 6: Test on Mobile 📱

1. Open Chrome DevTools (F12)
2. Click the device toggle button (Ctrl+Shift+M)
3. Test different screen sizes
4. Check the hamburger menu works

## Common Issues & Fixes 🔧

### Images Not Showing?
- **Check**: Are filenames spelled exactly right?
- **Check**: Are images in `assets/images/` folder?
- **Fix**: Use lowercase filenames, no spaces

### Videos Not Playing?
- **Check**: Are videos .mp4 format?
- **Fix**: Videos are optional - site uses fallback images
- **Fix**: Compress videos to under 10MB

### Layout Looks Weird?
- **Check**: Did you edit CSS carefully?
- **Fix**: Undo recent changes
- **Fix**: Compare with original CSS

### Menu Not Working on Mobile?
- **Check**: Is JavaScript file linked?
- **Fix**: Check browser console for errors
- **Fix**: Make sure `script.js` is in the same folder

## Testing Checklist ✅

Before showing to clients:

- [ ] All images load correctly
- [ ] Videos play (or fallback images show)
- [ ] All text updated with your apartment info
- [ ] Mobile menu works
- [ ] All links work
- [ ] Gallery slideshow works
- [ ] Colors match your brand
- [ ] Test on mobile device
- [ ] Test on different browsers
- [ ] No console errors

## Next Steps 🎯

1. **Get Professional Photos**
   - Hire a real estate photographer
   - Or use high-quality stock photos
   - See ASSETS-GUIDE.md for tips

2. **Add Videos**
   - Record smooth walkthroughs
   - Use drone for exterior shots
   - Compress to under 10MB

3. **Deploy Online**
   - Use Netlify (free, easiest)
   - Use Vercel
   - Use GitHub Pages
   - See README.md for deployment guide

4. **SEO Optimization**
   - Add meta descriptions
   - Add Open Graph tags
   - Submit to Google Search Console

5. **Add Advanced Features**
   - Contact form backend
   - Virtual tour integration
   - Floor plan viewer
   - Availability calendar

## Useful Resources 📚

- **Main README**: Detailed documentation
- **ASSETS-GUIDE**: How to prepare images/videos
- **Color Picker**: [Coolors.co](https://coolors.co/)
- **Image Compression**: [TinyJPG.com](https://tinyjpg.com/)
- **Video Compression**: [HandBrake](https://handbrake.fr/)

## Need Help? 💬

1. Check browser console (F12) for errors
2. Review README.md for detailed info
3. Check ASSETS-GUIDE.md for asset specs
4. Google the error message
5. Ask on Stack Overflow

## 🎉 You're Done!

Your website should now be:
- ✨ Beautiful and modern
- 📱 Fully responsive
- 🎥 Video backgrounds working
- 🖼️ Image gallery functional
- ⚡ Smooth animations
- 🎨 Professionally designed

Enjoy your amazing apartment website!

---

**Pro Tip**: Bookmark `localhost:8000` while developing, and refresh (Ctrl+R or Cmd+R) to see changes instantly!

**Remember**: Replace ALL placeholder images with your actual apartment photos for the best result!

Good luck! 🏢✨
