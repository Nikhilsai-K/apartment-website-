'use client';

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
  return (
    <div className="bg-white min-h-screen">
      <NavigationLight />

      {/* Clean Header */}
      <section className="pt-32 pb-16 px-6 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-dark mb-3 tracking-tight">物件概要</h1>
          <p className="text-sm text-dark/60 uppercase tracking-widest">Property Overview</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/apart-0.png"
          alt="The Park House Higashi-Ginza"
          fill
          className="object-cover"
          quality={95}
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Description */}
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-dark mb-8 leading-tight">
              東京の中心、銀座エリアに位置する洗練された住空間
            </h2>
            <div className="space-y-6 text-lg text-dark/70 leading-relaxed text-left">
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
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/apart-1.png"
                alt="View 1"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/apart-2.png"
                alt="View 2"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/apart-3.png"
                alt="View 3"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>

          {/* Property Details Table */}
          <div className="bg-primary p-12 md:p-16">
            <h3 className="text-3xl font-light text-dark mb-12 text-center">詳細情報</h3>
            <div className="max-w-4xl mx-auto space-y-1">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 border-b border-dark/10 py-4 hover:bg-white/50 transition-colors"
                >
                  <div className="col-span-1 font-medium text-dark/60 text-sm uppercase tracking-wider">
                    {detail.label}
                  </div>
                  <div className="col-span-2 text-dark font-light">{detail.value}</div>
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
