'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';
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
  return (
    <div className="bg-primary min-h-screen text-dark">
      <Navigation />

      {/* Clean Header with Background */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop&q=90"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="section-container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-4 tracking-wide">物件概要</h1>
          <p className="text-xs md:text-sm text-secondary uppercase tracking-[0.2em]">Property Overview</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-primary">
        <div className="section-container py-20 md:py-32">
          {/* Description */}
          <div className="max-w-3xl mx-auto mb-24 text-center">
            <h2 className="text-2xl md:text-4xl font-serif text-dark mb-10 leading-relaxed">
              東京の中心、銀座エリアに位置する<br />洗練された住空間
            </h2>
            <div className="space-y-8 text-base md:text-lg text-dark/70 leading-loose text-left font-light">
              <p>
                「ザ・パークハウス東銀座」は、東京の中心・銀座エリアに位置する2015年竣工の高級レジデンスです。
                地上13階建・地下1階、総戸数36戸という贅沢な造りで、都会の喧騒を忘れさせる洗練された住空間を提供します。
              </p>
              <p>
                RC（鉄筋コンクリート）造の堅牢な構造は、優れた耐震性と遮音性を実現。
                商業地域に位置しながらも、落ち着いた住環境を保っています。
              </p>
              <p>
                新富町駅から徒歩わずか1分という抜群の立地。築地、宝町、東銀座、銀座一丁目と、
                複数の駅が徒歩圏内にあり、都心各地へのアクセスが極めて便利です。
              </p>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-24">
            <div className="relative aspect-[4/5] overflow-hidden bg-light">
              <Image
                src="/images/apart-1.png"
                alt="View 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={90}
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-light">
              <Image
                src="/images/apart-2.png"
                alt="View 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={90}
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-light">
              <Image
                src="/images/apart-3.png"
                alt="View 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={90}
              />
            </div>
          </div>

          {/* Property Details Table */}
          <div className="bg-light p-8 md:p-20">
            <h3 className="text-2xl md:text-3xl font-serif text-dark mb-12 text-center">詳細情報</h3>
            <div className="max-w-3xl mx-auto border-t border-dark/10">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 border-b border-dark/10 py-5 hover:bg-white/5 transition-colors"
                >
                  <div className="md:col-span-1 font-medium text-dark/50 text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-0">
                    {detail.label}
                  </div>
                  <div className="md:col-span-2 text-dark/90 font-light text-sm md:text-base">{detail.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
