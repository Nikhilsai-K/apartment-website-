'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: '/images/apart-0.png', title: '外観' },
  { src: '/images/apart-1.png', title: 'エントランス' },
  { src: '/images/apart-2.png', title: 'リビングルーム' },
  { src: '/images/apart-3.png', title: 'キッチン' },
];

export default function GalleryModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-lightbg to-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm uppercase tracking-[0.2em] font-semibold block mb-4">
            Gallery
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-dark font-serif">
            ギャラリー
          </h2>
          <p className="text-dark/70 mt-4 max-w-2xl mx-auto">
            洗練された空間をご覧ください
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-2xl font-bold font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-secondary hover:bg-accent text-white px-12 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 tracking-wide"
            >
              全ての写真を見る →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
