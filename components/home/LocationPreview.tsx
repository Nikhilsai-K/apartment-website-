'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const topStations = [
  { name: '新富町駅', time: '徒歩1分', line: '東京メトロ有楽町線' },
  { name: '築地駅', time: '徒歩5分', line: '東京メトロ日比谷線' },
  { name: '宝町駅', time: '徒歩8分', line: '東京メトロ銀座線' },
];

export default function LocationPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">Location</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-2">アクセス</h2>
          <p className="text-lg text-dark/70 mt-4">複数の駅が徒歩圏内、都心各地へ抜群のアクセス</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {topStations.map((station, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-primary p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-2xl font-bold text-dark mb-2">{station.name}</div>
              <div className="bg-secondary text-white px-4 py-1 rounded-full inline-block text-sm font-semibold mb-2">
                {station.time}
              </div>
              <div className="text-sm text-dark/60">{station.line}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/location">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-secondary text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              詳しいアクセスを見る →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
