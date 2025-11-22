'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import NavigationLight from '@/components/NavigationLight';
import Footer from '@/components/Footer';

const ratings = [
  { name: '最寄り駅の充実度', value: 4.0 },
  { name: '周辺環境', value: 4.0 },
  { name: '買い物・食事', value: 4.0 },
  { name: '暮らし・子育て', value: 4.0 },
];

const reviews = [
  {
    date: '2023年10月31日',
    rating: 4,
    title: '銀座の端ですが他の路線が歩いて使える距離',
    content:
      '銀座の端ですが他の路線が歩いて使える距離にあります。全てが高いですが、高いなりのよさが享受できます。おしゃれな店が多く、ビジネス街でもあるので飲食店も豊富です。',
  },
  {
    date: '2021年12月12日',
    rating: 5,
    title: '静かでいい環境',
    content:
      '静かでいい。駅の出口にすぐローソンあるし、閑静で住みやすいと思う。交番もすぐ近くにあるし、特に悪いと思うところはない。築地との距離が近く、様々な駅とのアクセスもいいと思う。',
  },
];

export default function ReviewsPage() {
  const ref = useRef(null);
  const [animatedRatings, setAnimatedRatings] = useState(ratings.map(() => 0));

  useEffect(() => {
    ratings.forEach((rating, index) => {
      setTimeout(() => {
        setAnimatedRatings((prev) => {
          const newRatings = [...prev];
          newRatings[index] = rating.value;
          return newRatings;
        });
      }, 500 + index * 150);
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <NavigationLight />

      {/* Clean Header */}
      <section className="pt-32 pb-16 px-6 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-dark mb-3 tracking-tight">口コミ</h1>
          <p className="text-sm text-dark/60 uppercase tracking-widest">Resident Reviews</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/apart-5.png"
          alt="Reviews"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      <section className="py-20 px-6 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {/* Overall Rating */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center justify-center bg-primary p-8">
              <div className="text-6xl font-light text-dark mb-4">4.0</div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-2xl ${i < 4 ? 'text-secondary' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
              </div>
              <div className="text-dark/60 text-xs uppercase tracking-wider">総合評価</div>
            </div>

            <div className="md:col-span-3 space-y-5 bg-primary p-8">
              {ratings.map((rating, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-40 text-dark font-light text-sm">{rating.name}</div>
                  <div className="flex-1 h-2 bg-white/50 overflow-hidden">
                    <div
                      style={{ width: `${(animatedRatings[index] / 5) * 100}%` }}
                      className="h-full bg-secondary transition-all duration-1000"
                    />
                  </div>
                  <div className="w-12 text-right font-light text-dark">{rating.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-primary p-8 border-l-2 border-secondary">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs text-dark/50 uppercase tracking-wider">{review.date}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${i < review.rating ? 'text-secondary' : 'text-gray-300'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="text-xl font-light text-dark mb-4">{review.title}</h4>
                <p className="text-dark/70 leading-relaxed font-light">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
