'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import NavigationLight from '@/components/NavigationLight';

const features = [
  { icon: '🏢', title: '構造', desc: 'RC（鉄筋コンクリート）', detail: '地上13階建 地下1階' },
  { icon: '📍', title: '所在地', desc: '東京都中央区', detail: '新富2丁目7番7号' },
  { icon: '🔑', title: '管理', desc: '三菱地所コミュニティ', detail: '日勤管理' },
  { icon: '🏗️', title: '分譲', desc: '三菱地所レジデンス', detail: '南海辰村建設' },
];

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-primary min-h-screen">
      <NavigationLight />

      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=90"
          alt="Building"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-4">物件概要</h1>
          <p className="text-xl md:text-2xl text-dark/80">About The Property</p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&q=90"
                alt="Exterior"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl font-bold text-dark mb-6">銀座の洗練された住空間</h2>
              <p className="text-lg text-dark/70 leading-relaxed mb-6">
                東京の中心、銀座エリアに位置する「ザ・パークハウス東銀座」は、都会の喧騒を忘れさせる洗練された住空間を提供します。
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                13階建ての堂々たる佇まいは、周辺環境と調和しながらも存在感を放つデザインとなっています。
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-secondary font-semibold mb-1">{feature.desc}</p>
                <p className="text-sm text-dark/60">{feature.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
