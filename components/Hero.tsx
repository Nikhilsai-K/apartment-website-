'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=85"
          alt="Building Exterior"
          fill
          className="object-cover scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Animated overlay effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_60%)] animate-pulse" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative h-full flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif mb-6 tracking-wider leading-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
          >
            <span className="block mb-2">ザ・パークハウス</span>
            <span className="text-secondary">東銀座</span>
          </motion.h1>
          <motion.div
            className="h-1 w-32 bg-secondary mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl font-light font-montserrat tracking-[0.4em] text-secondary/90 mb-8"
        >
          THE PARK HOUSE HIGASHI-GINZA
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl font-light mb-16 max-w-3xl leading-relaxed"
        >
          銀座の中心で、贅沢な暮らしを
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6"
        >
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 text-lg font-semibold tracking-wider overflow-hidden bg-secondary text-black rounded-md transition-all duration-300 shadow-lg shadow-secondary/50 hover:shadow-2xl hover:shadow-secondary/70"
          >
            <span className="relative z-10">ギャラリーを見る</span>
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 text-lg font-semibold tracking-wider border-2 border-white/80 rounded-md overflow-hidden transition-all duration-300 hover:border-white"
          >
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              物件概要
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm tracking-widest text-secondary/80">SCROLL</span>
            <div className="w-6 h-10 border-2 border-secondary/60 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1.5 h-3 bg-secondary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
