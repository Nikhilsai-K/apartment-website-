'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Navbar from '@/components/Navigation';
import Footer from '@/components/Footer';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const sliderImages = [
  '/images/apart-0.png',
  '/images/apart-1.png',
  '/images/apart-2.png',
  '/images/apart-3.png',
  '/images/apart-4.png',
  '/images/apart-5.png',
];

// Grid images with aspect ratio info (ratio: 'landscape' for 16:9, 'portrait' for 9:16)
const gridImages = [
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=90', ratio: 'landscape' },
  { src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1080&h=1920&fit=crop&q=90', ratio: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&h=1080&fit=crop&q=90', ratio: 'landscape' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1080&h=1920&fit=crop&q=90', ratio: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=90', ratio: 'landscape' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080&h=1920&fit=crop&q=90', ratio: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&h=1080&fit=crop&q=90', ratio: 'landscape' },
  { src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1080&h=1920&fit=crop&q=90', ratio: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&q=90', ratio: 'landscape' },
];

export default function GalleryPage() {
  return (
    <div className="bg-primary min-h-screen text-dark">
      <Navbar />

      {/* Hero Header with Background */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1600&h=900&fit=crop&q=90"
            alt="Interior Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="section-container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-4 tracking-wide">ギャラリー</h1>
          <p className="text-xs md:text-sm text-secondary uppercase tracking-[0.2em]">Gallery</p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-20 bg-primary border-t border-dark/5">
        <div className="section-container">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{ rotate: 20, stretch: 0, depth: 150, modifier: 1, slideShadows: false }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="gallery-swiper !pb-12"
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index} className="!w-[85%] md:!w-[60%] lg:!w-[50%]">
                <div className="relative aspect-video overflow-hidden shadow-2xl">
                  <Image src={image} alt={`Gallery ${index + 1}`} fill className="object-cover" quality={95} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Grid Gallery - Masonry Style for Mixed Ratios */}
      <section className="bg-primary">
        <div className="section-container py-20 md:py-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gridImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer ${image.ratio === 'portrait' ? 'row-span-2' : 'col-span-2'
                  }`}
              >
                <div className={`relative w-full ${image.ratio === 'portrait' ? 'aspect-[9/16]' : 'aspect-[16/9]'}`}>
                  <Image
                    src={image.src}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
