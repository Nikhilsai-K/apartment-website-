'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navigation';
import Footer from '@/components/Footer';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1280&fit=crop&q=90',
    category: 'exterior',
    title: '外観',
    description: 'モダンな建築デザイン',
    width: 1920,
    height: 1280,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080&h=1920&fit=crop&q=90',
    category: 'living',
    title: 'リビングルーム',
    description: '洗練された居住空間',
    width: 1080,
    height: 1920,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&h=1280&fit=crop&q=90',
    category: 'bedroom',
    title: 'ベッドルーム',
    description: '贅沢な寝室',
    width: 1920,
    height: 1280,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1080&h=1920&fit=crop&q=90',
    category: 'kitchen',
    title: 'キッチン',
    description: 'プレミアムキッチン',
    width: 1080,
    height: 1920,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1280&fit=crop&q=90',
    category: 'bathroom',
    title: 'バスルーム',
    description: 'ラグジュアリーバス',
    width: 1920,
    height: 1280,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080&h=1920&fit=crop&q=90',
    category: 'exterior',
    title: 'エントランス',
    description: '高級感あふれる玄関',
    width: 1080,
    height: 1920,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&h=1280&fit=crop&q=90',
    category: 'living',
    title: 'ラウンジ',
    description: 'モダンなラウンジ',
    width: 1920,
    height: 1280,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1080&h=1920&fit=crop&q=90',
    category: 'exterior',
    title: '夜景',
    description: '美しい夜の外観',
    width: 1080,
    height: 1920,
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&h=1280&fit=crop&q=90',
    category: 'living',
    title: 'インテリア',
    description: 'こだわりのインテリア',
    width: 1920,
    height: 1280,
  },
];

const categories = [
  { id: 'all', label: 'すべて', labelEn: 'All' },
  { id: 'exterior', label: '外観', labelEn: 'Exterior' },
  { id: 'living', label: 'リビング', labelEn: 'Living' },
  { id: 'bedroom', label: 'ベッドルーム', labelEn: 'Bedroom' },
  { id: 'kitchen', label: 'キッチン', labelEn: 'Kitchen' },
  { id: 'bathroom', label: 'バスルーム', labelEn: 'Bathroom' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="bg-primary min-h-screen text-dark">
      <Navbar />

      {/* Original Hero Section */}
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

      {/* Filter Categories */}
      <section className="py-12 bg-primary border-y border-dark/10">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-secondary text-primary'
                    : 'bg-light/50 text-dark border border-dark/20'
                  }`}
              >
                <span className="block">{category.label}</span>
                <span className="text-xs opacity-70">{category.labelEn}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Justified/Flickr Grid - Clean rows with any aspect ratio */}
      <section className="py-20 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => {
                // Calculate flex basis to maintain aspect ratio
                const aspectRatio = image.width / image.height;
                const flexBasis = `${aspectRatio * 300}px`; // 300px as base height

                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      flexGrow: aspectRatio,
                      flexBasis: flexBasis,
                      minWidth: '200px',
                      maxWidth: '600px',
                    }}
                    className="group cursor-pointer relative overflow-hidden"
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />

                      {/* Elegant Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="h-px w-16 bg-secondary mb-3" />
                          <h3 className="text-white text-2xl font-serif font-light mb-2">
                            {image.title}
                          </h3>
                          <p className="text-secondary text-xs tracking-wider uppercase">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/97 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full max-w-6xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.find((img) => img.id === selectedImage) && (
                <>
                  <div className="relative w-full h-full">
                    <Image
                      src={galleryImages.find((img) => img.id === selectedImage)!.src}
                      alt="Full size"
                      fill
                      className="object-contain"
                      quality={100}
                    />
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-12 right-0 text-white/80 text-sm uppercase tracking-wider flex items-center gap-2"
                  >
                    <span>閉じる</span>
                    <span className="text-2xl">×</span>
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
