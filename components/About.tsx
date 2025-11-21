'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const features = [
  {
    icon: '🏢',
    title: '構造',
    subtitle: 'Structure',
    description: 'RC（鉄筋コンクリート）',
    detail: '地上13階建 地下1階',
  },
  {
    icon: '📍',
    title: '所在地',
    subtitle: 'Location',
    description: '東京都中央区',
    detail: '新富2丁目7番7号',
  },
  {
    icon: '🔑',
    title: '管理',
    subtitle: 'Management',
    description: '三菱地所コミュニティ',
    detail: '日勤管理',
  },
  {
    icon: '🏗️',
    title: '分譲',
    subtitle: 'Developer',
    description: '三菱地所レジデンス',
    detail: '南海辰村建設',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary text-sm md:text-base font-montserrat tracking-[0.3em] uppercase mb-4 block"
          >
            ABOUT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
          >
            物件概要
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-24 bg-secondary mx-auto"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&q=85"
              alt="Building Exterior"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl md:text-3xl font-light font-montserrat tracking-wider text-secondary"
              >
                Premium Luxury Living
              </motion.p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              銀座の洗練された住空間
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              東京の中心、銀座エリアに位置する「ザ・パークハウス東銀座」は、都会の喧騒を忘れさせる洗練された住空間を提供します。
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
              13階建ての堂々たる佇まいは、周辺環境と調和しながらも存在感を放つデザインとなっています。2015年竣工、総戸数36戸の贅沢な邸宅です。
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-secondary/10 border border-secondary/30 px-6 py-3 rounded-lg">
                <div className="text-secondary text-2xl font-bold">13</div>
                <div className="text-sm text-gray-400">階建て</div>
              </div>
              <div className="bg-secondary/10 border border-secondary/30 px-6 py-3 rounded-lg">
                <div className="text-secondary text-2xl font-bold">36</div>
                <div className="text-sm text-gray-400">総戸数</div>
              </div>
              <div className="bg-secondary/10 border border-secondary/30 px-6 py-3 rounded-lg">
                <div className="text-secondary text-2xl font-bold">2015</div>
                <div className="text-sm text-gray-400">竣工年</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-xl hover:border-secondary/50 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
              <p className="text-xs text-secondary/70 font-montserrat tracking-wider mb-3">
                {feature.subtitle}
              </p>
              <p className="text-base text-gray-300 mb-1">{feature.description}</p>
              <p className="text-sm text-gray-400">{feature.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
