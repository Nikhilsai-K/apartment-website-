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
          {/* Description with Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
            {/* Text Content - Left Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-dark mb-4 leading-tight">
                  東京の中心、銀座エリアに位置する<br />
                  <span className="text-secondary">洗練された住空間</span>
                </h2>
                <div className="h-1 w-20 bg-secondary mb-8" />
              </div>

              <ul className="space-y-5 text-base md:text-lg text-dark/80 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-secondary text-xl mt-0.5 flex-shrink-0">●</span>
                  <div>
                    「ザ・パークハウス東銀座」は、東京の中心・銀座エリアに位置する<strong className="text-dark font-semibold">2015年竣工</strong>の高級レジデンスです。
                    <span className="block mt-2">
                      地上<strong className="text-dark font-semibold">13階建</strong>・地下1階、総戸数<strong className="text-dark font-semibold">36戸</strong>という贅沢な造りで、都会の喧騒を忘れさせる洗練された住空間を提供します。
                    </span>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="text-secondary text-xl mt-0.5 flex-shrink-0">●</span>
                  <div>
                    <strong className="text-dark font-semibold">RC（鉄筋コンクリート）造</strong>の堅牢な構造は、優れた耐震性と遮音性を実現。
                    <span className="block mt-2">
                      商業地域に位置しながらも、落ち着いた住環境を保っています。
                    </span>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="text-secondary text-xl mt-0.5 flex-shrink-0">●</span>
                  <div>
                    新富町駅から<strong className="text-dark font-semibold">徒歩わずか1分</strong>という抜群の立地。
                    <span className="block mt-2">
                      築地、宝町、東銀座、銀座一丁目と、複数の駅が徒歩圏内にあり、都心各地へのアクセスが極めて便利です。
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Single Image - Right Side */}
            <div className="relative lg:sticky lg:top-24 self-start">
              <div className="relative aspect-[3/4] overflow-hidden bg-light shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=1600&fit=crop&q=90"
                  alt="The Park House Higashi-Ginza"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-r-4 border-b-4 border-secondary/30 -z-10" />
            </div>
          </div>

          {/* Property Details */}
          <div className="py-16 md:py-20 bg-primary">
            <div className="max-w-4xl mx-auto px-6">
              <h3 className="text-3xl md:text-4xl font-serif text-dark mb-10 text-center">詳細情報</h3>

              {/* Simple Table */}
              <div className="border-t border-dark/10">
                {details.map((detail, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 border-b border-dark/10 py-5"
                  >
                    <div className="font-medium text-dark/60 text-sm md:text-base mb-1 md:mb-0">
                      {detail.label}
                    </div>
                    <div className="md:col-span-2 text-dark text-sm md:text-base">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
