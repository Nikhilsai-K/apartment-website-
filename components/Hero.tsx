'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    }, 6000); // Change every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Image Slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }} // Smooth crossfade with slow zoom reset
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentIndex]}
            alt="Apartment Exterior"
            fill
            className="object-cover"
            priority={true}
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/20" /> {/* Base darkening */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 tracking-wider text-white drop-shadow-2xl"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            ザ・パークハウス東銀座
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl font-light text-white/90 mb-12 tracking-[0.2em] uppercase drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            The Park House Higashi-Ginza
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-8"
        >
          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#d4af37' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-secondary/90 backdrop-blur-sm text-white font-medium text-lg rounded-full shadow-xl transition-all duration-300 tracking-wide border border-white/10"
            >
              View Gallery
            </motion.button>
          </Link>

          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-medium text-lg rounded-full border border-white/30 transition-all duration-300 tracking-wide"
            >
              Object Overview
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/70 text-xs flex flex-col items-center gap-3"
          >
            <span className="tracking-[0.2em] uppercase shadow-black drop-shadow-md">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/80 to-white/0"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
