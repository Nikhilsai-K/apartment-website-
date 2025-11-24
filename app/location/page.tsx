'use client';

import { useRef } from 'react';
import Navigation from '@/components/Navigation';
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
    <div className="bg-primary min-h-screen text-dark">
      <Navigation />

      {/* Clean Header with Background */}
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

      {/* Main Content */}
      <section className="bg-primary" ref={ref}>
        <div className="section-container py-16 md:py-20">

          {/* Stations Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {stations.map((station, index) => (
              <div
                key={index}
                className={`bg-light p-6 transition-all border-l-2 ${station.highlight
                  ? 'border-secondary'
                  : 'border-dark/5 hover:border-dark/10'
                  }`}
              >
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="text-lg md:text-xl font-serif text-dark mb-1.5">{station.name}</h3>
                    <div className="flex gap-3 text-xs text-dark/50 font-light">
                      <span>{station.time}</span>
                      <span>•</span>
                      <span>{station.distance}</span>
                    </div>
                  </div>
                  {station.highlight && (
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-[10px] uppercase tracking-wider font-medium">
                      Main
                    </span>
                  )}
                </div>

                {/* Lines */}
                <div className="mb-5 space-y-2">
                  {station.lines.map((line, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: line.color }}
                      />
                      <span className="text-xs text-dark/80 font-light">{line.name}</span>
                    </div>
                  ))}
                </div>

                {/* Destinations */}
                <div className="pt-4 border-t border-dark/10">
                  <p className="text-[10px] uppercase tracking-widest text-dark/30 mb-3">Access Time</p>
                  <div className="grid grid-cols-3 gap-3">
                    {station.destinations.map((dest, i) => (
                      <div key={i} className="text-left">
                        <p className="text-xs font-medium text-dark mb-0.5">{dest.to}</p>
                        <p className="text-[10px] text-dark/50">{dest.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps - Full Width */}
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-serif text-dark mb-6 text-center">地図</h2>
            <div className="w-full h-[400px] md:h-[500px] bg-light">
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
            <p className="text-center text-xs text-dark/30 mt-6 tracking-wider">
              Google Maps
            </p>
          </div>

          {/* Address */}
          <div className="text-center bg-light p-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-dark/50 mb-2">Address</p>
            <p className="text-sm md:text-base font-light text-dark">
              〒104-0041 東京都中央区新富2丁目7番7号
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
