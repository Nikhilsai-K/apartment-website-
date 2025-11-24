'use client';

import { useRef } from 'react';
import Navigation from '@/components/Navigation';
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
    rating: 5,
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

  return (
    <div className="bg-primary min-h-screen text-dark">
      <Navigation />

      {/* Hero Header with Background */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop&q=90"
            alt="Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="section-container text-center relative z-10">
          <p className="text-xs md:text-sm text-secondary uppercase tracking-[0.2em] mb-4">
            Resident Reviews
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-dark tracking-wide">
            口コミ
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-primary" ref={ref}>
        <div className="section-container py-16 md:py-20">
          {/* Overall Rating - Compact */}
          <div className="mb-16">
            <div className="bg-light p-8 flex items-center justify-between">
              {/* Left: Rating Display */}
              <div className="flex items-center gap-6">
                <div className="text-4xl font-light text-dark">4.0</div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-base ${i < 4 ? 'text-secondary' : 'text-dark/20'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-dark/50 uppercase tracking-wider">Overall Rating</p>
                </div>
              </div>

              {/* Right: Category Ratings */}
              <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-3">
                {ratings.map((rating, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-xs text-dark/70 font-light whitespace-nowrap">{rating.name}</span>
                    <span className="text-sm text-secondary font-medium">{rating.value.toFixed(1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-serif text-dark mb-8">
              入居者の声
            </h2>

            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-light p-6 border-l-2 border-secondary/30 hover:border-secondary transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-3 md:mb-0">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < review.rating ? 'text-secondary' : 'text-dark/20'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-light text-dark mb-2">
                      {review.title}
                    </h3>
                  </div>
                  <div className="text-xs text-dark/40 font-light">{review.date}</div>
                </div>
                <p className="text-sm text-dark/70 leading-relaxed font-light">
                  {review.content}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-sm md:text-base font-light text-dark/70 mb-6">
              実際の住環境をぜひご自身の目でお確かめください
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-dark transition-all duration-300 text-xs tracking-[0.2em] uppercase"
            >
              内覧予約はこちら
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
