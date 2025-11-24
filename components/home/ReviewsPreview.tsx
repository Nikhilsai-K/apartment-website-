'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const reviews = [
  {
    rating: 4,
    title: '銀座の端ですが便利',
    text: '他の路線が歩いて使える距離にあります。おしゃれな店が多く、飲食店も豊富です。',
  },
  {
    rating: 5,
    title: '静かでいい環境',
    text: '閑静で住みやすい。交番もすぐ近くにあり、治安が良いです。',
  },
];

export default function ReviewsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-16 bg-secondary" />
            <span className="text-secondary text-xs uppercase tracking-[0.3em] font-medium">
              Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-dark mb-4">
            入居者の声
          </h2>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex items-end gap-6 mb-20 pb-12 border-b border-dark/10"
        >
          <div className="text-7xl md:text-8xl font-light text-dark">4.0</div>
          <div className="pb-4">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-2xl ${
                    i < 4 ? 'text-secondary' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-dark/50">総合評価</p>
          </div>
        </motion.div>

        {/* Reviews List */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
              className="group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < review.rating ? 'text-secondary' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-light text-dark mb-3">
                {review.title}
              </h3>
              <p className="text-dark/60 leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/reviews">
            <button className="group inline-flex items-center gap-3 text-dark hover:text-secondary transition-colors duration-300">
              <span className="text-sm uppercase tracking-[0.2em] border-b border-dark group-hover:border-secondary pb-1">
                All Reviews
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
