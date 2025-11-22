'use client';

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Image Slideshow - Simple Fade */}
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: idx === currentIndex ? 1 : 0 }}
        >
          <Image
            src={img}
            alt="The Park House Higashi-Ginza"
            fill
            className="object-cover"
            priority={idx === 0}
            quality={95}
          />
        </div>
      ))}

      {/* Minimal Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content - Clean & Professional */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 tracking-tight">
            ザ・パークハウス東銀座
          </h1>
          <p className="text-lg md:text-xl font-light text-white/80 mb-12 tracking-widest uppercase">
            The Park House Higashi-Ginza
          </p>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link href="/gallery">
              <button className="px-8 py-3 bg-white text-dark font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/90">
                Gallery
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-3 bg-transparent text-white font-medium text-sm uppercase tracking-wider border border-white transition-colors hover:bg-white hover:text-dark">
                Overview
              </button>
            </Link>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="text-white/60 text-xs flex flex-col items-center gap-2">
            <span className="tracking-widest uppercase text-[10px]">Scroll</span>
            <div className="w-[1px] h-12 bg-white/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
