'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function ReviewsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-2">口コミ</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl text-center"
          >
            <div className="text-6xl font-bold text-secondary mb-2">4.0</div>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-2xl ${i < 4 ? 'text-secondary' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
            </div>
            <div className="text-dark/60">総合評価</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < 4 ? 'text-secondary' : 'text-gray-300'}`}>★</span>
              ))}
            </div>
            <h4 className="font-bold text-dark mb-2">銀座の端ですが便利</h4>
            <p className="text-sm text-dark/70">
              他の路線が歩いて使える距離にあります。おしゃれな店が多く、飲食店も豊富です...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg text-secondary">★</span>
              ))}
            </div>
            <h4 className="font-bold text-dark mb-2">静かでいい環境</h4>
            <p className="text-sm text-dark/70">
              閑静で住みやすい。交番もすぐ近くにあり、治安が良いです...
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/reviews">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-secondary text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              全てのレビューを見る →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
