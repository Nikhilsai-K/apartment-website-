# ザ・パークハウス東銀座 Website

A beautiful, modern website for The Park House Higashi-Ginza apartment tower featuring video backgrounds, smooth animations, and elegant design.

## Features

✨ **Beautiful Design**
- Elegant Japanese-inspired aesthetic
- Smooth scroll animations
- Parallax effects
- Fade-in transitions

🎥 **Video Backgrounds**
- Hero section with video background
- Contact section with video background
- Automatic fallback to images if video fails

📱 **Fully Responsive**
- Mobile-friendly navigation
- Optimized for all screen sizes
- Touch swipe for image gallery

🖼️ **Interactive Gallery**
- Auto-playing slideshow
- Manual navigation controls
- Keyboard navigation (arrow keys)
- Touch swipe support

⚡ **Performance Optimized**
- Lazy loading images
- Debounced scroll events
- Smooth 60fps animations
- SEO-friendly structure

## File Structure

```
apartment-website/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/
    ├── images/         # Image assets
    │   ├── exterior-1.jpg      # Building exterior
    │   ├── exterior-2.jpg      # Night view
    │   ├── interior-1.jpg      # Living room
    │   ├── interior-2.jpg      # Kitchen
    │   ├── interior-3.jpg      # Bedroom
    │   ├── common-area.jpg     # Common spaces
    │   └── hero-fallback.jpg   # Fallback for video
    └── video/          # Video assets
        ├── apartment-hero.mp4     # Hero section video
        └── apartment-interior.mp4 # Contact section video
```

## Adding Your Images and Videos

### Required Images

Place these images in the `assets/images/` folder:

1. **exterior-1.jpg** - Main building exterior shot (recommended: 1200x800px)
2. **exterior-2.jpg** - Night view or different angle (recommended: 1200x800px)
3. **interior-1.jpg** - Living room (recommended: 1920x1080px)
4. **interior-2.jpg** - Kitchen (recommended: 1920x1080px)
5. **interior-3.jpg** - Bedroom (recommended: 1920x1080px)
6. **common-area.jpg** - Lobby/entrance/common space (recommended: 1920x1080px)
7. **hero-fallback.jpg** - Fallback image for hero video (recommended: 1920x1080px)

### Required Videos

Place these videos in the `assets/video/` folder:

1. **apartment-hero.mp4** - Hero section background video
   - Recommended: 1920x1080px (Full HD)
   - Duration: 10-30 seconds
   - Format: MP4 (H.264 codec)
   - Keep file size under 10MB for best performance

2. **apartment-interior.mp4** - Contact section background video
   - Recommended: 1920x1080px (Full HD)
   - Duration: 10-30 seconds
   - Format: MP4 (H.264 codec)
   - Keep file size under 10MB for best performance

### Video Tips

- Use high-quality but compressed videos
- Shoot smooth, slow-moving footage
- Avoid too much motion (subtle is better)
- Ensure good lighting
- Consider drone footage for exterior views
- Slow pan/tilt movements work best

### Where to Get Free Stock Videos (if needed)

If you don't have custom videos, you can use these sites:
- [Pexels Videos](https://www.pexels.com/videos/)
- [Pixabay Videos](https://pixabay.com/videos/)
- [Coverr](https://coverr.co/)

Search for: "luxury apartment", "modern interior", "building exterior", "tokyo architecture"

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1a1a1a;      /* Dark backgrounds */
    --secondary-color: #d4af37;     /* Gold accent */
    --accent-color: #8b7355;        /* Brown accent */
    --text-light: #ffffff;          /* Light text */
    --text-dark: #333333;           /* Dark text */
}
```

### Changing Text Content

Edit the text directly in `index.html`. The content is organized into sections:
- Hero Section
- About Section
- Gallery Section
- Price Section
- Location Section
- Reviews Section
- Contact Section

### Adding More Gallery Images

In `index.html`, add more slides:

```html
<div class="slide">
    <img src="assets/images/your-image.jpg" alt="Description">
    <div class="slide-caption">Your Caption</div>
</div>
```

And add corresponding dots:

```html
<span class="dot" onclick="currentSlide(6)"></span>
```

## Usage

### Local Development

1. Simply open `index.html` in your web browser
2. Or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
```

Then visit `http://localhost:8000`

### Deployment

You can deploy this website to:
- **Netlify** - Drag and drop the folder
- **Vercel** - Connect your Git repository
- **GitHub Pages** - Push to a GitHub repository
- **Any web hosting** - Upload via FTP

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**
   - Use JPG for photos (quality: 80-85%)
   - Resize to appropriate dimensions
   - Consider using WebP format for modern browsers

2. **Optimize Videos**
   - Compress videos before uploading
   - Use tools like HandBrake or Adobe Media Encoder
   - Target bitrate: 3-5 Mbps for 1080p

3. **Enable Caching**
   - Add cache headers on your server
   - Consider using a CDN for assets

## Sections Overview

### 1. Hero Section
Full-screen video background with apartment name and key statistics

### 2. About Section
Property overview with key features and building information

### 3. Gallery Section
Auto-playing slideshow of interior and exterior photos

### 4. Price Section
Estimated pricing and rental information

### 5. Location Section
Access information with interactive map and station details

### 6. Reviews Section
Customer reviews with rating visualization

### 7. Contact Section
Contact form with video background

### 8. Footer
Additional information and links

## Features Breakdown

### Navigation
- Fixed top navigation bar
- Smooth scroll to sections
- Mobile hamburger menu
- Transparent background that becomes solid on scroll

### Animations
- Fade-in on scroll
- Parallax video backgrounds
- Smooth transitions
- Counter animations for statistics
- Rating bar animations

### Interactive Elements
- Slideshow with auto-play
- Manual slide controls
- Keyboard navigation (arrow keys)
- Touch swipe on mobile
- Hover effects on cards and buttons

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus management
- Skip to main content link
- Alt text for images

## SEO Optimization

- Semantic HTML structure
- Meta tags in head
- Proper heading hierarchy (H1, H2, H3, etc.)
- Descriptive alt text for images
- Clean URL structure
- Fast loading times

## Future Enhancements

Consider adding:
- [ ] Virtual tour integration (360° photos)
- [ ] Floor plan viewer
- [ ] Availability calendar
- [ ] Online inquiry form with backend
- [ ] Multi-language support (English/Japanese toggle)
- [ ] Property comparison tool
- [ ] Mortgage calculator
- [ ] Newsletter subscription

## Credits

**Design & Development**
- Modern responsive design
- Japanese typography (Noto Serif JP)
- English typography (Montserrat)

**Property Information**
- The Park House Higashi-Ginza
- Managed by: Mitsubishi Jisho Community
- Developed by: Mitsubishi Jisho Residence

## License

This website template is created for The Park House Higashi-Ginza.

## Support

For questions or issues, please check:
1. Image and video file paths are correct
2. Assets are in the correct folders
3. Browser console for any errors
4. All files are in the same directory structure

---

**Note**: Make sure to add your actual apartment photos and videos to the `assets` folder before deploying the website!

Enjoy your beautiful new apartment website! 🏢✨
