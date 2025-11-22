'use client';

import { useRef } from 'react';
import NavigationLight from '@/components/NavigationLight';
import Footer from '@/components/Footer';

const stations = [
  {
    name: '新富町駅',
    time: '徒歩1分',
    distance: '80m',
    lines: [
      { name: '東京メトロ有楽町線', color: '#c1a470' }
    ],
    destinations: [
      { to: '銀座一丁目', time: '1分' },
      { to: '有楽町', time: '2分' },
      { to: '永田町', time: '6分' }
    ],
    highlight: true
  },
  {
    name: '築地駅',
    time: '徒歩5分',
    distance: '400m',
    lines: [
      { name: '東京メトロ日比谷線', color: '#b5b5ac' }
    ],
    destinations: [
      { to: '銀座', time: '2分' },
      { to: '日比谷', time: '4分' },
      { to: '六本木', time: '11分' }
    ],
    highlight: false
  },
  {
    name: '宝町駅',
    time: '徒歩8分',
    distance: '640m',
    lines: [
      { name: '都営浅草線', color: '#e85298' }
    ],
    destinations: [
      { to: '日本橋', time: '2分' },
      { to: '新橋', time: '3分' },
      { to: '押上', time: '15分' }
    ],
    highlight: false
  },
  {
    name: '東銀座駅',
    time: '徒歩8分',
    distance: '650m',
    lines: [
      { name: '東京メトロ日比谷線', color: '#b5b5ac' },
      { name: '都営浅草線', color: '#e85298' }
    ],
    destinations: [
      { to: '銀座', time: '1分' },
      { to: '日本橋', time: '3分' },
      { to: '新橋', time: '2分' }
    ],
    highlight: false
  },
];

export default function LocationPage() {
  const ref = useRef(null);

  return (
    <div className="bg-white min-h-screen">
      <NavigationLight />

      {/* Clean Header */}
      <section className="pt-32 pb-16 px-6 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-dark mb-3 tracking-tight">アクセス</h1>
          <p className="text-sm text-dark/60 uppercase tracking-widest mb-6">Location & Access</p>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto leading-relaxed">
            都心の中心、銀座エリアに位置し、複数路線が利用可能な抜群の交通利便性を誇ります。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto">

          {/* Stations Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {stations.map((station, index) => (
              <div
                key={index}
                className={`bg-white border-2 p-8 transition-all ${
                  station.highlight
                    ? 'border-secondary shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-dark mb-1">{station.name}</h3>
                    <div className="flex gap-3 text-sm text-dark/60">
                      <span>{station.time}</span>
                      <span>•</span>
                      <span>{station.distance}</span>
                    </div>
                  </div>
                  {station.highlight && (
                    <span className="px-3 py-1 bg-secondary text-white text-xs uppercase tracking-wider">
                      最寄駅
                    </span>
                  )}
                </div>

                {/* Lines */}
                <div className="mb-6 space-y-2">
                  {station.lines.map((line, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-1 h-6"
                        style={{ backgroundColor: line.color }}
                      />
                      <span className="text-sm text-dark">{line.name}</span>
                    </div>
                  ))}
                </div>

                {/* Destinations */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs uppercase tracking-wider text-dark/50 mb-3">主要駅までの所要時間</p>
                  <div className="grid grid-cols-3 gap-3">
                    {station.destinations.map((dest, i) => (
                      <div key={i} className="text-center">
                        <p className="text-sm font-medium text-dark">{dest.to}</p>
                        <p className="text-xs text-dark/60">{dest.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps - Full Width */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-dark mb-6 text-center">地図</h2>
            <div className="w-full h-[600px] border-4 border-primary overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827!2d139.7767!3d35.6697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be70208479f%3A0x7e67c4997d4c3c0e!2z5paw5a!3dO-UuuODgOODnuODsw!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-center text-sm text-dark/60 mt-4">
              Googleマップで周辺施設や経路を確認いただけます
            </p>
          </div>

          {/* Address */}
          <div className="text-center bg-primary p-12">
            <p className="text-xs uppercase tracking-widest text-dark/50 mb-3">Address</p>
            <p className="text-2xl md:text-3xl font-light text-dark">
              〒104-0041 東京都中央区新富2丁目7番7号
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
