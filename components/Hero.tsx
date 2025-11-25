'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const heroImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85&fit=crop', // Modern luxury apartment interior
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85&fit=crop', // Elegant living room
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=85&fit=crop', // Sophisticated bedroom
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=85&fit=crop', // Premium kitchen
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=85&fit=crop', // Luxurious bathroom
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&fit=crop', // Modern architecture view
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000); // Increased to 8 seconds for better viewing
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Image Slideshow - Enhanced with Ken Burns Effect */}
      {heroImages.map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{
            opacity: idx === currentIndex ? 1 : 0,
            scale: idx === currentIndex ? [1, 1.08] : 1, // Subtle zoom effect
          }}
          transition={{
            opacity: {
              duration: 2.5,
              ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for smooth fade
            },
            scale: {
              duration: 8,
              ease: 'linear', // Slow, continuous zoom
            },
          }}
          className="absolute inset-0"
        >
          <Image
            src={img}
            alt="The Park House Higashi-Ginza"
            fill
            className="object-cover"
            priority={idx === 0}
            quality={95}
            unoptimized // Disable Next.js optimization for Unsplash URLs
          />
        </motion.div>
      ))}

      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center"
        >
          {/* Tagline */}
          <div className="mb-8">
            <span className="text-white/80 text-sm md:text-base tracking-[0.2em] uppercase font-medium">
              Ginza Residence
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-white mb-8 tracking-tight leading-tight font-light">
            <span className="block text-5xl md:text-7xl lg:text-8xl mb-2">ザ・パークハウス</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-white/90">東銀座</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg font-light text-white/90 tracking-wider max-w-2xl mx-auto leading-relaxed">
            銀座の中心で、贅沢な暮らしを
          </p>
        </motion.div>

        {/* Scroll Indicator - Simplified */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-white/40" />
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 right-12 flex gap-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="group relative py-2"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`h-[2px] transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-8 bg-white/30 hover:bg-white/50'
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
