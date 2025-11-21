'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import NavigationLight from '@/components/NavigationLight';
import Footer from '@/components/Footer';

const details = [
  { label: '物件名', value: 'ザ・パークハウス東銀座' },
  { label: '所在地', value: '東京都中央区新富2丁目7番7号' },
  { label: '交通', value: '新富町駅 徒歩1分 / 築地駅 徒歩5分' },
  { label: '築年月', value: '2015年11月' },
  { label: '構造', value: 'RC（鉄筋コンクリート）' },
  { label: '階建', value: '地上13階建 地下1階' },
  { label: '総戸数', value: '36戸' },
  { label: '土地権利', value: '所有権' },
  { label: '用途地域', value: '商業地域' },
  { label: '管理会社', value: '三菱地所コミュニティ' },
  { label: '管理形態', value: '日勤' },
  { label: '分譲会社', value: '三菱地所レジデンス' },
  { label: '施工会社', value: '南海辰村建設' },
  { label: '設計会社', value: '南海辰村建設' },
];

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-primary min-h-screen">
      <NavigationLight />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=90"
          alt="Building"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6">物件概要</h1>
          <p className="text-xl md:text-2xl text-dark/80 leading-relaxed">
            東京の中心、銀座エリアに位置する洗練された住空間
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Description with Image */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-dark mb-6">銀座の洗練された住空間</h2>
              <p className="text-lg text-dark/70 leading-relaxed">
                「ザ・パークハウス東銀座」は、東京の中心・銀座エリアに位置する2015年竣工の高級レジデンスです。
                地上13階建・地下1階、総戸数36戸という贅沢な造りで、都会の喧騒を忘れさせる洗練された住空間を提供します。
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                RC（鉄筋コンクリート）造の堅牢な構造は、優れた耐震性と遮音性を実現。
                商業地域に位置しながらも、落ち着いた住環境を保っています。
              </p>
              <p className="text-lg text-dark/70 leading-relaxed">
                新富町駅から徒歩わずか1分という抜群の立地。築地、宝町、東銀座、銀座一丁目と、
                複数の駅が徒歩圏内にあり、都心各地へのアクセスが極めて便利です。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="space-y-6"
            >
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&q=90"
                  alt="Exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&q=90"
                  alt="Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Property Details Table */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16"
          >
            <h3 className="text-3xl font-bold text-dark mb-8 text-center">詳細情報</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="flex border-b border-secondary/20 pb-4"
                >
                  <div className="w-1/3 font-semibold text-secondary">{detail.label}</div>
                  <div className="w-2/3 text-dark/80">{detail.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
