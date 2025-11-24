'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: '/images/apart-0.png', title: '外観', subtitle: 'Exterior' },
  { src: '/images/apart-1.png', title: 'エントランス', subtitle: 'Entrance' },
  { src: '/images/apart-2.png', title: 'リビングルーム', subtitle: 'Living Room' },
  { src: '/images/apart-3.png', title: 'キッチン', subtitle: 'Kitchen' },
];

export default function GalleryModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-16 bg-secondary" />
            <span className="text-secondary text-xs uppercase tracking-[0.3em] font-medium">
              Gallery
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-dark">
            空間の魅力
          </h2>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * index, duration: 0.7 }}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                  {item.subtitle}
                </p>
                <h3 className="text-white text-xl font-light tracking-wide">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link href="/gallery">
            <button className="group inline-flex items-center gap-3 text-dark hover:text-secondary transition-colors duration-300">
              <span className="text-sm uppercase tracking-[0.2em] border-b border-dark group-hover:border-secondary pb-1">
                View Full Gallery
              </span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
