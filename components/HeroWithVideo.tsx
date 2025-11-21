'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=90',
    title: 'ザ・パークハウス東銀座',
    subtitle: '銀座の中心で、贅沢な暮らしを',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop&q=90',
    title: '洗練されたデザイン',
    subtitle: '都会の喧騒を忘れさせる住空間',
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=90',
    title: '上質な暮らし',
    subtitle: '2015年竣工、総戸数36戸の邸宅',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=90',
    title: 'プレミアムな空間',
    subtitle: '三菱地所レジデンス分譲',
  },
];

export default function HeroWithVideo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background (fallback to images) */}
      <div className="absolute inset-0 video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={slides[0].image}
        >
          <source src="/videos/apartment-hero.mp4" type="video/mp4" />
        </video>

        {/* Image Slider (shows if video doesn't load) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 tracking-wider text-dark drop-shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl font-light text-dark/90 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mt-8"
        >
          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-secondary text-white font-semibold text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              ギャラリーを見る
            </motion.button>
          </Link>

          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/90 backdrop-blur-sm text-dark font-semibold text-lg rounded-lg border-2 border-secondary/30 hover:bg-white hover:border-secondary transition-all duration-300"
            >
              物件概要
            </motion.button>
          </Link>
        </motion.div>

        {/* Slider Controls */}
        <div className="absolute bottom-24 left-0 right-0 flex justify-center items-center gap-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
          >
            <span className="text-dark text-2xl">‹</span>
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-secondary rounded-full'
                    : 'w-3 h-3 bg-white/60 rounded-full hover:bg-white'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
          >
            <span className="text-dark text-2xl">›</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-dark/60 text-sm flex flex-col items-center gap-2"
          >
            <span className="tracking-widest">SCROLL</span>
            <div className="w-6 h-10 border-2 border-dark/40 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-3 bg-dark/60 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
