# Assets Guide for The Park House Higashi-Ginza Website

This guide will help you prepare and add the correct images and videos to your website.

## Quick Start

1. Add your images to the `images/` folder
2. Add your videos to the `video/` folder
3. Make sure the filenames match exactly as listed below
4. Refresh your browser to see the changes

---

## 📸 Required Images

Place all images in the `assets/images/` folder.

### 1. exterior-1.jpg
- **What**: Main building exterior photograph
- **Recommended Size**: 1200 x 800 pixels
- **Aspect Ratio**: 3:2 (landscape)
- **Usage**: About section main image
- **Tips**:
  - Use a clear, bright day photo
  - Show the full building facade
  - Include some surrounding area

### 2. exterior-2.jpg
- **What**: Building at night or alternative angle
- **Recommended Size**: 1920 x 1080 pixels
- **Aspect Ratio**: 16:9 (landscape)
- **Usage**: Gallery slideshow
- **Tips**:
  - Evening/twilight shots work beautifully
  - Show building lighting
  - Capture the atmosphere

### 3. interior-1.jpg
- **What**: Living room or main living space
- **Recommended Size**: 1920 x 1080 pixels
- **Aspect Ratio**: 16:9 (landscape)
- **Usage**: Gallery slideshow - Slide 1
- **Tips**:
  - Wide-angle shot to show space
  - Well-lit, professional photo
  - Clean and staged

### 4. interior-2.jpg
- **What**: Modern kitchen
- **Recommended Size**: 1920 x 1080 pixels
- **Aspect Ratio**: 16:9 (landscape)
- **Usage**: Gallery slideshow - Slide 2
- **Tips**:
  - Show appliances and countertops
  - Highlight modern features
  - Good natural or artificial lighting

### 5. interior-3.jpg
- **What**: Bedroom
- **Recommended Size**: 1920 x 1080 pixels
- **Aspect Ratio**: 16:9 (landscape)
- **Usage**: Gallery slideshow - Slide 3
- **Tips**:
  - Peaceful, inviting atmosphere
  - Show windows and natural light
  - Include view if possible

### 6. common-area.jpg
- **What**: Lobby, entrance, or common spaces
- **Recommended Size**: 1920 x 1080 pixels
- **Aspect Ratio**: 16:9 (landscape)
- **Usage**: Gallery slideshow - Slide 5
- **Tips**:
  - Show elegant common amenities
  - Lobby, hallways, or shared spaces
  - Professional, high-end feel

### 7. hero-fallback.jpg
- **What**: Stunning building or interior shot
- **Recommended Size**: 1920 x 1080 pixels
- **Aspect Ratio**: 16:9 (landscape)
- **Usage**: Fallback if hero video doesn't load
- **Tips**:
  - Your best, most striking photo
  - High resolution and quality
  - Represents the luxury of the property

---

## 🎥 Required Videos

Place all videos in the `assets/video/` folder.

### 1. apartment-hero.mp4
- **What**: Building exterior or sweeping shots
- **Recommended Size**: 1920 x 1080 pixels (Full HD)
- **Duration**: 15-30 seconds
- **Format**: MP4 (H.264 codec)
- **File Size**: Under 10MB (compress if needed)
- **Frame Rate**: 30fps or 60fps
- **Usage**: Hero section background
- **Tips**:
  - Slow, smooth camera movements
  - Drone footage works great
  - Show building from various angles
  - Subtle motion (avoid jerky movements)
  - Good lighting (golden hour ideal)
  - Loop-friendly (should loop seamlessly)

### 2. apartment-interior.mp4
- **What**: Interior walkthrough or room showcase
- **Recommended Size**: 1920 x 1080 pixels (Full HD)
- **Duration**: 15-30 seconds
- **Format**: MP4 (H.264 codec)
- **File Size**: Under 10MB (compress if needed)
- **Frame Rate**: 30fps or 60fps
- **Usage**: Contact section background
- **Tips**:
  - Smooth gimbal/stabilized footage
  - Walk through living spaces
  - Show windows, natural light
  - Highlight luxury features
  - Slow pan across rooms
  - Loop-friendly

---

## 🎨 Image Specifications

### Optimal Settings for Export

**Format**: JPG
- Quality: 85%
- Color Space: sRGB
- Progressive: Yes

**Or WebP** (more modern, better compression)
- Quality: 85%
- If using WebP, update filenames in HTML

### Image Optimization Tools

**Free Online Tools**:
- [TinyJPG](https://tinyjpg.com/) - Compress JPG/PNG
- [Squoosh](https://squoosh.app/) - Advanced compression
- [Compressor.io](https://compressor.io/) - Smart compression

**Desktop Software**:
- Adobe Photoshop - "Save for Web"
- GIMP (free) - Export with quality adjustment
- ImageOptim (Mac) - Drag and drop optimization

---

## 🎬 Video Specifications

### Optimal Settings for Export

**Codec**: H.264
**Container**: MP4
**Resolution**: 1920 x 1080 (Full HD)
**Frame Rate**: 30fps (or 24fps for cinematic)
**Bitrate**: 3-5 Mbps (balance quality/file size)
**Audio**: Remove audio track (not needed)

### Video Compression Tools

**Free Tools**:
- [HandBrake](https://handbrake.fr/) - Excellent free video compressor
- [FFmpeg](https://ffmpeg.org/) - Command line tool
- [CloudConvert](https://cloudconvert.com/mp4-converter) - Online converter

**HandBrake Settings**:
1. Select "Fast 1080p30" preset
2. Video tab: Set Quality to RF 23-25
3. Remove audio track
4. Save and export

**FFmpeg Command** (for advanced users):
```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec none -crf 23 -preset slow output.mp4
```

---

## 📐 Aspect Ratios Reference

- **16:9** (1920x1080) - Standard HD, used for most images/videos
- **3:2** (1200x800) - Standard photo ratio
- **4:3** (1600x1200) - Traditional photo ratio

---

## 🌐 Where to Get Stock Content

If you don't have professional photos yet, use these resources:

### Free Stock Photos
- [Unsplash](https://unsplash.com/) - Search: "modern apartment", "luxury interior"
- [Pexels](https://www.pexels.com/) - Search: "apartment building", "tokyo architecture"
- [Pixabay](https://pixabay.com/) - Free high-quality images

### Free Stock Videos
- [Pexels Videos](https://www.pexels.com/videos/) - Search: "apartment interior", "building exterior"
- [Pixabay Videos](https://pixabay.com/videos/) - Free HD videos
- [Coverr](https://coverr.co/) - Beautiful free stock footage

### Recommended Search Terms
- "luxury apartment interior"
- "modern Japanese architecture"
- "tokyo building exterior"
- "contemporary living room"
- "high-rise apartment"
- "minimalist interior"

---

## ✅ Checklist

Before launching your website, ensure:

- [ ] All 7 images are in `assets/images/` folder
- [ ] Both videos are in `assets/video/` folder
- [ ] Filenames match exactly (case-sensitive)
- [ ] Images are optimized (under 500KB each)
- [ ] Videos are compressed (under 10MB each)
- [ ] All images are high quality
- [ ] Videos loop smoothly
- [ ] Test website in browser to confirm all assets load

---

## 🚨 Troubleshooting

**Images not showing?**
- Check filename spelling (exact match required)
- Ensure file is in correct folder
- Check file extension (.jpg not .jpeg)
- Clear browser cache and refresh

**Videos not playing?**
- Ensure .mp4 format
- Check file size (should be under 10MB)
- Verify H.264 codec
- Test in different browser
- Check browser console for errors

**Slow loading?**
- Compress images more
- Reduce video file size
- Use WebP format for images
- Enable caching on server

---

## 📁 Final Folder Structure

```
assets/
├── images/
│   ├── exterior-1.jpg        ✅
│   ├── exterior-2.jpg        ✅
│   ├── interior-1.jpg        ✅
│   ├── interior-2.jpg        ✅
│   ├── interior-3.jpg        ✅
│   ├── common-area.jpg       ✅
│   └── hero-fallback.jpg     ✅
├── video/
│   ├── apartment-hero.mp4    ✅
│   └── apartment-interior.mp4 ✅
└── ASSETS-GUIDE.md (this file)
```

---

## 💡 Pro Tips

1. **Consistency is Key**: Keep similar lighting and color tones across images
2. **Professional Photos**: Consider hiring a real estate photographer
3. **Golden Hour**: Best time for exterior photos (sunrise/sunset)
4. **Staging**: Ensure interiors are clean and professionally staged
5. **Wide Angles**: Use wide-angle lens for interior shots
6. **Stabilization**: Use gimbal or tripod for video
7. **4K Footage**: Shoot in 4K, export in 1080p for best quality

---

Need help? Check the main README.md file or consult the HTML file for exact usage of each asset!

Good luck with your beautiful apartment website! 🏢✨
