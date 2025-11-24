'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: '/images/apart-0.png', title: '外観', subtitle: 'Exterior' },
  { src: '/images/apart-1.png', title: 'エントランス', subtitle: 'Entrance' },
];

export default function GalleryModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-primary">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-16 bg-secondary" />
                <span className="text-secondary text-xs uppercase tracking-[0.3em] font-medium">
                  Gallery
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-dark">
                空間の魅力
              </h2>
            </div>
            <Link href="/gallery">
              <button className="group hidden md:inline-flex items-center gap-3 text-dark hover:text-secondary transition-colors duration-300">
                <span className="text-sm uppercase tracking-[0.2em] border-b border-dark group-hover:border-secondary pb-1 transition-colors">
                  View Full Gallery
                </span>
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden bg-light shadow-xl"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white/70 text-xs uppercase tracking-wider mb-2">
                  {item.subtitle}
                </p>
                <h3 className="text-white text-xl font-light tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for Mobile */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/gallery">
            <button className="group inline-flex items-center gap-3 text-dark hover:text-secondary transition-colors duration-300">
              <span className="text-sm uppercase tracking-[0.2em] border-b border-dark group-hover:border-secondary pb-1 transition-colors">
                View Full Gallery
              </span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
