'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import NavigationLight from '@/components/NavigationLight';
import Footer from '@/components/Footer';

const stations = [
  { name: '新富町駅', time: '徒歩1分', lines: ['東京メトロ有楽町線'], highlight: true },
  { name: '築地駅', time: '徒歩5分', lines: ['東京メトロ日比谷線'], highlight: false },
  { name: '宝町駅', time: '徒歩8分', lines: ['東京メトロ銀座線', '都営浅草線'], highlight: false },
  { name: '東銀座駅', time: '徒歩8分', lines: ['東京メトロ日比谷線', '都営浅草線'], highlight: false },
  { name: '銀座一丁目駅', time: '徒歩8分', lines: ['東京メトロ有楽町線'], highlight: false },
];

export default function LocationPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-primary min-h-screen">
      <NavigationLight />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1920&h=1080&fit=crop&q=90"
          alt="Location"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6">アクセス</h1>
          <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
            都心各地へのアクセスが極めて便利な立地
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-secondary text-sm uppercase tracking-wider font-semibold">Access</span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mt-2 mb-4">抜群のアクセス環境</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              5つの駅が徒歩圏内。都心の主要エリアへスムーズにアクセスできます。
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 mb-16">
            {/* Stations */}
            <div className="lg:col-span-2 space-y-5">
              {stations.map((station, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={`p-6 rounded-2xl shadow-lg transition-all ${
                    station.highlight
                      ? 'bg-gradient-to-br from-secondary/30 to-secondary/10 border-2 border-secondary shadow-secondary/20'
                      : 'bg-white border border-accent/20 hover:border-accent/40'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-dark">{station.name}</h3>
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                        station.highlight ? 'bg-secondary text-white shadow-lg' : 'bg-accent/20 text-dark'
                      }`}
                    >
                      {station.time}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {station.lines.map((line, i) => (
                      <span key={i} className="text-xs text-dark/70 bg-primary px-3 py-1.5 rounded-full border border-secondary/20">
                        {line}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="lg:col-span-3 h-[650px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241!2d139.77!3d35.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzEyLjAiTiAxMznCsDQ2JzEyLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="mt-16 text-center bg-white rounded-2xl p-8 shadow-xl"
          >
            <p className="text-sm text-secondary uppercase mb-2">ADDRESS</p>
            <p className="text-2xl md:text-3xl font-bold text-dark">
              〒104-0041 東京都中央区新富2丁目7番7号
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
