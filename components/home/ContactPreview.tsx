'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=90"
        alt="Contact"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-dark/70" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">お問い合わせ</h2>
          <p className="text-xl text-white/90 mb-12">
            物件に関するご質問、内覧のご希望など、お気軽にお問い合わせください
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="group bg-white text-dark px-10 py-4 font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-300">
                お問い合わせフォーム
              </button>
            </Link>

            <Link href="/contact">
              <button className="group bg-transparent border border-white text-white px-10 py-4 font-medium text-sm uppercase tracking-wider hover:bg-white hover:text-dark transition-all duration-300">
                無料査定
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
