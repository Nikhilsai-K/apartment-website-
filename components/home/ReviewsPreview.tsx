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
    <section ref={ref} className="bg-primary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-16 bg-secondary" />
            <span className="text-secondary text-xs uppercase tracking-[0.3em] font-medium">
              Reviews
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-light text-dark">
              入居者の声
            </h2>
            {/* Compact Rating Summary */}
            <div className="flex items-center gap-3">
              <div className="text-2xl font-light text-dark">4.0</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-base ${i < 4 ? 'text-secondary' : 'text-dark/20'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews List */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-light p-6 border-l-2 border-secondary/30 hover:border-secondary transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${i < review.rating ? 'text-secondary' : 'text-dark/20'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-light text-dark mb-2">
                {review.title}
              </h3>
              <p className="text-sm text-dark/60 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/reviews">
            <button className="group inline-flex items-center gap-3 text-dark hover:text-secondary transition-colors duration-300">
              <span className="text-sm uppercase tracking-[0.2em] border-b border-dark group-hover:border-secondary pb-1 transition-colors">
                All Reviews
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
