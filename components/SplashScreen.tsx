'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a minimum display time for the splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3800); // 3.8 seconds (added 2 more seconds)

    // Also check if the page is fully loaded
    const handleLoad = () => {
      // Wait for a minimum time before hiding
      setTimeout(() => {
        setIsLoading(false);
      }, 3800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ x: 0 }}
          exit={{
            x: '-100%'
          }}
          transition={{
            duration: 2.5, // Slower slide for smoother transition
            ease: [0.22, 1, 0.36, 1] // Smooth, gentle easing - no flash
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="text-center">
            {/* Main text with stagger animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="overflow-hidden"
            >
              <h1 className="font-[family-name:var(--font-noto-serif-jp)] text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-wider mb-6">
                一生ものに、住む。
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="overflow-hidden"
            >
              <p className="font-[family-name:var(--font-montserrat)] text-sm md:text-base lg:text-lg font-light text-gray-600 tracking-widest uppercase">
                Live in a Lifelong Home
              </p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-12 flex justify-center"
            >
              <div className="relative w-32 h-0.5 bg-gray-200 overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-gray-800"
                />
              </div>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-16"
            >
              <p className="font-[family-name:var(--font-noto-serif-jp)] text-xs md:text-sm font-light text-gray-500 tracking-[0.3em]">
                ザ・パークハウス東銀座
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-xs font-light text-gray-400 tracking-widest mt-1">
                THE PARK HOUSE HIGASHI-GINZA
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
