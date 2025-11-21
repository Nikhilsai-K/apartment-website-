'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import NavigationLight from '@/components/NavigationLight';

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

      <section className="pt-32 pb-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-dark mb-4">アクセス</h1>
            <p className="text-xl text-dark/70">Location & Access</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Stations */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-8">抜群のアクセス環境</h2>
              <div className="space-y-4">
                {stations.map((station, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className={`p-6 rounded-xl shadow-lg ${
                      station.highlight
                        ? 'bg-secondary/20 border-l-4 border-secondary'
                        : 'bg-white border-l-4 border-accent'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-dark">{station.name}</h3>
                      <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold ${
                          station.highlight ? 'bg-secondary text-white' : 'bg-accent/20 text-dark'
                        }`}
                      >
                        {station.time}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {station.lines.map((line, i) => (
                        <span key={i} className="text-sm text-dark/60 bg-primary px-3 py-1 rounded-full">
                          {line}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="h-[600px] rounded-2xl overflow-hidden shadow-2xl"
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
    </div>
  );
}
