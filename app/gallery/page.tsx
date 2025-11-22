'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import NavigationLight from '@/components/NavigationLight';
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
    <div className="bg-white min-h-screen">
      <NavigationLight />

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-dark mb-2 tracking-tight">ギャラリー</h1>
          <p className="text-sm text-dark/60 uppercase tracking-widest">Gallery</p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
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
            className="gallery-swiper"
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index} className="!w-[90%] md:!w-[70%] lg:!w-[60%]">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={image} alt={`Gallery ${index + 1}`} fill className="object-cover" quality={95} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Grid Gallery - Masonry Style for Mixed Ratios */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gridImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer ${
                  image.ratio === 'portrait' ? 'row-span-2' : 'col-span-2'
                }`}
              >
                <div className={`relative w-full ${image.ratio === 'portrait' ? 'aspect-[9/16]' : 'aspect-[16/9]'}`}>
                  <Image
                    src={image.src}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    quality={90}
                  />
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
