'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation for stats counter
    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll('.stat-number');
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2.5,
            delay: 1,
            ease: 'power2.out',
            snap: { textContent: 1 },
            onUpdate: function () {
              stat.textContent = Math.ceil((stat as any).textContent);
            },
          }
        );
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=85"
          alt="Building Exterior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Animated particles/overlay effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative h-full flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-4 tracking-wider"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
          >
            ザ・パークハウス
            <br />
            <span className="text-secondary">東銀座</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-light font-montserrat tracking-[0.3em] text-secondary/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            THE PARK HOUSE HIGASHI-GINZA
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl font-light mb-12 max-w-2xl"
        >
          銀座の中心で、贅沢な暮らしを
        </motion.p>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
        >
          <div className="text-center">
            <div className="stat-number text-5xl md:text-6xl font-bold text-secondary mb-2" data-target="13">
              0
            </div>
            <div className="text-sm md:text-base text-gray-300 tracking-wider">階建て</div>
          </div>
          <div className="text-center">
            <div className="stat-number text-5xl md:text-6xl font-bold text-secondary mb-2" data-target="36">
              0
            </div>
            <div className="text-sm md:text-base text-gray-300 tracking-wider">総戸数</div>
          </div>
          <div className="text-center">
            <div className="stat-number text-5xl md:text-6xl font-bold text-secondary mb-2" data-target="2015">
              0
            </div>
            <div className="text-sm md:text-base text-gray-300 tracking-wider">竣工年</div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          variants={itemVariants}
          href="#about"
          className="relative group"
        >
          <span className="inline-block border-2 border-secondary px-10 py-4 text-lg tracking-wider font-semibold overflow-hidden">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              詳細を見る
            </span>
            <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </span>
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-secondary rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
