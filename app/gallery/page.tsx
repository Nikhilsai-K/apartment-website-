'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import NavigationLight from '@/components/NavigationLight';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=90', title: 'Living Room', desc: '広々としたリビング' },
  { src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1920&h=1080&fit=crop&q=90', title: 'Kitchen', desc: 'モダンなキッチン' },
  { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&h=1080&fit=crop&q=90', title: 'Bedroom', desc: 'エレガントな寝室' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop&q=90', title: 'Exterior', desc: '建物外観' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=90', title: 'Lobby', desc: '高級ロビー' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&q=90', title: 'Bathroom', desc: 'バスルーム' },
];

export default function GalleryPage() {
  return (
    <div className="bg-primary min-h-screen">
      <NavigationLight />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-dark mb-4">ギャラリー</h1>
            <p className="text-xl text-dark/70">Gallery Showcase</p>
          </motion.div>

          {/* 3D Swiper */}
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 200, modifier: 1, slideShadows: true }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 4000 }}
            loop
            className="gallery-swiper mb-20"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index} className="!w-[80%] md:!w-[60%]">
                <div className="relative aspect-video rounded-2xl overflow-hidden group">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                      <p className="text-secondary">{image.desc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              >
                <Image src={image.src} alt={image.title} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
