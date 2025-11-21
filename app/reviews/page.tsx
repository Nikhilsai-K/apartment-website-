'use client';

import { motion, useInView } from 'framer-motion';
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
  const isInView = useInView(ref, { once: true });
  const [animatedRatings, setAnimatedRatings] = useState(ratings.map(() => 0));

  useEffect(() => {
    if (isInView) {
      ratings.forEach((rating, index) => {
        setTimeout(() => {
          setAnimatedRatings((prev) => {
            const newRatings = [...prev];
            newRatings[index] = rating.value;
            return newRatings;
          });
        }, 500 + index * 150);
      });
    }
  }, [isInView]);

  return (
    <div className="bg-primary min-h-screen">
      <NavigationLight />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1920&h=1080&fit=crop&q=90"
          alt="Reviews"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-4">口コミ</h1>
          <p className="text-xl text-dark/80">Customer Reviews</p>
        </motion.div>
      </section>

      <section className="py-16 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {/* Overall Rating */}
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="md:col-span-3 flex flex-col items-center justify-center bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="text-7xl font-bold text-secondary mb-4">4.0</div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-2xl ${i < 4 ? 'text-secondary' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
              </div>
              <div className="text-dark/60 text-sm">総合評価</div>
            </motion.div>

            <div className="md:col-span-9 space-y-6 bg-white rounded-2xl p-8 shadow-xl">
              {ratings.map((rating, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-40 text-dark font-medium">{rating.name}</div>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(animatedRatings[index] / 5) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                    />
                  </div>
                  <div className="w-12 text-right font-bold text-secondary">{rating.value}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm text-dark/50">{review.date}</span>
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
                <h4 className="text-xl font-bold text-dark mb-4">{review.title}</h4>
                <p className="text-dark/70 leading-relaxed">{review.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
