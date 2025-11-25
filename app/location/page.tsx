'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const apartmentAddress = '東京都中央区新富2丁目7番7号';
const apartmentCoords = '35.6697,139.7767';

const stations = [
  {
    name: '新富町駅',
    nameEn: 'Shintomicho Station',
    time: '徒歩1分',
    distance: '80m',
    lines: ['東京メトロ有楽町線'],
    coords: '35.6706,139.7756',
    address: '中央区新富1-15-10',
    highlight: true
  },
  {
    name: '築地駅',
    nameEn: 'Tsukiji Station',
    time: '徒歩5分',
    distance: '400m',
    lines: ['東京メトロ日比谷線'],
    coords: '35.6656,139.7707',
    address: '中央区築地1-13-1',
    highlight: false
  },
  {
    name: '宝町駅',
    nameEn: 'Takaracho Station',
    time: '徒歩8分',
    distance: '640m',
    lines: ['都営浅草線'],
    coords: '35.6748,139.7734',
    address: '中央区京橋3-12-1',
    highlight: false
  },
  {
    name: '東銀座駅',
    nameEn: 'Higashi-Ginza Station',
    time: '徒歩8分',
    distance: '650m',
    lines: ['東京メトロ日比谷線', '都営浅草線'],
    coords: '35.6695,139.7671',
    address: '中央区銀座4-10-3',
    highlight: false
  },
  {
    name: '銀座一丁目駅',
    nameEn: 'Ginza-itchome Station',
    time: '徒歩9分',
    distance: '700m',
    lines: ['東京メトロ有楽町線'],
    coords: '35.6745,139.7650',
    address: '中央区銀座1-8-19',
    highlight: false
  },
];

export default function LocationPage() {
  const [selectedStation, setSelectedStation] = useState(stations[0]);

  return (
    <div className="bg-primary min-h-screen text-dark">
      <Navigation />

      {/* Hero Section - KEPT THE SAME */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop&q=90"
            alt="Tokyo Station"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="section-container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-4 tracking-wide">アクセス</h1>
          <p className="text-xs md:text-sm text-secondary uppercase tracking-[0.2em] mb-6">Location & Access</p>
          <p className="text-sm md:text-base text-dark/70 max-w-2xl mx-auto leading-relaxed font-light">
            都心の中心、銀座エリアに位置し、複数路線が利用可能な抜群の交通利便性を誇ります。
          </p>
        </div>
      </section>

      {/* Address Section */}
      <section className="bg-primary py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block border-t border-b border-secondary py-6 px-12">
              <p className="text-xs uppercase tracking-[0.3em] text-dark/40 mb-3">Address</p>
              <p className="text-lg md:text-xl text-dark leading-relaxed">
                〒104-0041 {apartmentAddress}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Stations & Map Section */}
      <section className="bg-primary py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-5 gap-8">

            {/* Left: Station List (40%) */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-serif text-dark mb-6">最寄り駅</h2>

              {stations.map((station, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedStation(station)}
                  className={`w-full text-left p-6 border-l-4 transition-all duration-300 ${selectedStation.name === station.name
                    ? 'bg-light border-secondary shadow-lg'
                    : 'bg-light/30 border-transparent hover:border-dark/20'
                    }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-serif text-dark mb-1">
                        {station.name}
                        {station.highlight && (
                          <span className="ml-2 text-xs bg-secondary text-primary px-2 py-0.5 uppercase tracking-wider font-bold">
                            最寄
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-dark/50">{station.nameEn}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-serif text-secondary">{station.time}</p>
                      <p className="text-xs text-dark/50">{station.distance}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {station.lines.map((line, i) => (
                      <span key={i} className="text-xs text-dark/60 px-2 py-0.5 bg-primary/30">
                        {line}
                      </span>
                    ))}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right: Live Map (60%) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="mb-4 bg-light p-4">
                  <h3 className="text-sm font-medium text-dark mb-1">
                    {selectedStation.name} → ザ・パークハウス東銀座
                  </h3>
                  <p className="text-xs text-dark/60">
                    徒歩ルート • {selectedStation.distance} • {selectedStation.time}
                  </p>
                </div>

                <div className="w-full h-[700px] border border-dark/10 bg-light overflow-hidden">
                  <iframe
                    key={selectedStation.name}
                    src={`https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3240.8!2d139.77!3d35.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s${selectedStation.coords.replace(',', '%2C')}!2s${encodeURIComponent(selectedStation.name)}!3m2!1d${selectedStation.coords.split(',')[0]}!2d${selectedStation.coords.split(',')[1]}!4m5!1s${apartmentCoords.replace(',', '%2C')}!2s${encodeURIComponent(apartmentAddress)}!3m2!1d${apartmentCoords.split(',')[0]}!2d${apartmentCoords.split(',')[1]}!5e0!3m2!1sja!2sjp`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-6 flex justify-center">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&origin=${selectedStation.coords}&destination=${apartmentCoords}&travelmode=walking`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-primary px-8 py-4 font-medium text-sm uppercase tracking-wider hover:bg-secondary/90 transition-all flex items-center gap-2"
                  >
                    Google Mapsで開く
                  </a>
                </div>

                <p className="text-xs text-dark/30 mt-3 text-center">
                  クリックで駅を変更してルートを確認
                </p>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
