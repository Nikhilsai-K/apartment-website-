# 🏢 ザ・パークハウス東銀座 - Advanced Next.js Website

A cutting-edge, luxury apartment website built with modern web technologies.

## 🚀 Tech Stack

This is a **GOD MODE** website using the latest and most advanced technologies:

### Core Framework
- ⚡ **Next.js 14** - React framework with App Router
- 🎯 **TypeScript** - Full type safety
- ⚛️ **React 19** - Latest React version

### Styling & Design
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- 🎭 **Custom Fonts** - Google Fonts (Noto Serif JP + Montserrat)

### Animations & Effects
- 🎬 **Framer Motion** - Production-ready motion library for React
- 🚀 **GSAP** - Professional-grade JavaScript animation
- 📜 **GSAP ScrollTrigger** - Scroll-driven animations
- 🌊 **Lenis** - Buttery smooth scrolling

### Advanced Features
- 📸 **Swiper.js** - Modern touch slider with 3D effects
- 🎪 **Coverflow Effect** - 3D carousel for gallery
- 🖼️ **Next/Image** - Automatic image optimization
- 🎯 **Parallax** - Depth and motion effects

### Additional Libraries
- 🎮 **Three.js** - 3D graphics (ready to use)
- 🎨 **@react-three/fiber** - React renderer for Three.js
- 🛠️ **@react-three/drei** - Useful helpers for react-three-fiber

## ✨ Features

### 🎯 Advanced Animations
- Smooth page transitions with Framer Motion
- GSAP-powered scroll-triggered animations
- Counter animations for statistics
- Parallax effects on scroll
- 3D coverflow gallery slider

### 🎨 Modern UI/UX
- Fully responsive design
- Mobile-first approach
- Smooth scrolling (Lenis)
- Custom cursor effects
- Hover animations
- Loading states

### ⚡ Performance
- Server-Side Rendering (SSR)
- Static Site Generation (SSG) where applicable
- Automatic code splitting
- Optimized images with Next/Image
- Lazy loading
- Bundle optimization

### 🎭 Components
- **Navigation** - Animated navbar with mobile menu
- **Hero** - Full-screen hero with GSAP counters
- **Gallery** - 3D Swiper carousel with autoplay
- **Smooth Scroll** - Lenis integration
- **More sections coming...**

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server
Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit files.

## 📁 Project Structure

```
apartment-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Navigation.tsx      # Animated navbar
│   ├── Hero.tsx           # Hero section with GSAP
│   ├── Gallery.tsx         # Swiper 3D gallery
│   └── SmoothScroll.tsx    # Lenis integration
├── lib/                    # Utility functions
├── public/                 # Static assets
├── old-version/            # Previous vanilla version
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#1a1a1a",      // Dark background
  secondary: "#d4af37",    // Gold accent
  accent: "#8b7355",       // Brown accent
}
```

### Fonts
Fonts are loaded in `app/layout.tsx`:
- Noto Serif JP (Japanese)
- Montserrat (English)

### Content
Edit components in the `components/` folder:
- Update text, images, and data
- Modify animations in Framer Motion components
- Adjust GSAP timelines

## 🚀 Advanced Features

### Framer Motion Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

### GSAP Scroll Animations
```typescript
gsap.fromTo(
  element,
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      scrub: 1,
    },
  }
);
```

### Swiper 3D Gallery
```tsx
<Swiper
  effect="coverflow"
  coverflowEffect={{
    rotate: 30,
    depth: 200,
    modifier: 1,
  }}
/>
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy Options

**Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Other Options:**
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 🎯 Performance Tips

1. **Images**: Use WebP format for better compression
2. **Fonts**: Fonts are optimized with `next/font`
3. **Code**: Automatic code splitting per page
4. **Caching**: Static assets cached automatically

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com/docs/v3/)
- [Swiper](https://swiperjs.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lenis](https://github.com/darkroomengineering/lenis)

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Regenerate TypeScript config
npx next telemetry disable
rm -rf .next
npm run dev
```

### Build Errors
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

## 🎨 What Makes This Advanced?

### vs. Plain HTML/CSS/JS

**Old Version:**
- ❌ Basic JavaScript
- ❌ Manual DOM manipulation
- ❌ No build process
- ❌ No TypeScript
- ❌ Basic animations
- ❌ No component reusability
- ❌ No optimization

**New Version:**
- ✅ React with TypeScript
- ✅ Component-based architecture
- ✅ Optimized build system
- ✅ Type safety
- ✅ Professional animations (Framer Motion + GSAP)
- ✅ Reusable components
- ✅ Automatic optimizations
- ✅ Server-side rendering
- ✅ Modern tooling

## 🚀 Next Steps

1. **Add More Sections**
   - About with 3D cards
   - Pricing table
   - Location with map integration
   - Reviews section
   - Contact form with validation

2. **Add CMS**
   - Integrate Sanity or Contentful
   - Make content editable

3. **Add Features**
   - Virtual tour (Three.js)
   - Floor plan viewer
   - Booking system
   - Multi-language support

4. **Analytics**
   - Google Analytics
   - Hotjar
   - Performance monitoring

## 📄 License

This project is for The Park House Higashi-Ginza.

## 🙏 Credits

Built with ❤️ using the most advanced web technologies available.

---

**Need Help?**
- Check Next.js documentation
- Review component source code
- Inspect browser console for errors

**This is the REAL DEAL** - Modern, scalable, and production-ready! 🚀
