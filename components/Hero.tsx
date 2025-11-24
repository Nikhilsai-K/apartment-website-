'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const heroImages = [
  '/images/apart-0.png',
  '/images/apart-1.png',
  '/images/apart-2.png',
  '/images/apart-3.png',
  '/images/apart-4.png',
  '/images/apart-5.png',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Image Slideshow with Ken Burns Effect */}
      {heroImages.map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ scale: 1 }}
          animate={{
            opacity: idx === currentIndex ? 1 : 0,
            scale: idx === currentIndex ? 1.05 : 1,
          }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
            scale: { duration: 6, ease: 'linear' },
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
          />
        </motion.div>
      ))}

      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-6"
          >
            <span className="text-white/70 text-sm md:text-base tracking-[0.3em] uppercase font-light">
              Ginza Residence
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight leading-tight">
            ザ・パークハウス
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl text-white/90">東銀座</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-base md:text-lg font-light text-white/80 tracking-wider max-w-2xl mx-auto leading-relaxed"
          >
            銀座の中心で、贅沢な暮らしを
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"
            />
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 right-12 flex gap-2"
        >
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="group relative"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`h-[1px] transition-all duration-500 ${
                  idx === currentIndex ? 'w-12 bg-white' : 'w-8 bg-white/30'
                }`}
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
