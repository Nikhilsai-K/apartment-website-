'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationLight() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', label: 'ホーム' },
    { href: '/about', label: '概要' },
    { href: '/gallery', label: 'ギャラリー' },
    { href: '/location', label: 'アクセス' },
    { href: '/reviews', label: 'レビュー' },
  ];

  // Get page title based on pathname
  const getPageTitle = () => {
    const titles: { [key: string]: string } = {
      '/': 'ホーム',
      '/about': '概要',
      '/gallery': '住まいのギャラリー',
      '/location': 'アクセス',
      '/reviews': 'レビュー',
      '/contact': 'お問い合わせ',
    };
    return titles[pathname] || 'ホーム';
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? 'top-4' : 'top-6'
        }`}
        style={{ width: 'calc(100% - 3rem)', maxWidth: '1400px' }}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              {/* Text */}
              <div className="hidden md:block">
                <span className="font-[family-name:var(--font-montserrat)] text-lg font-semibold text-gray-800 tracking-tight">
                  The Parkhouse
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Center Title - Shows current page */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
            <span className="font-[family-name:var(--font-noto-serif-jp)] text-base font-light text-gray-600 tracking-wider">
              {getPageTitle()}
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Company Branding */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-6 h-6 bg-red-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <span className="font-[family-name:var(--font-noto-serif-jp)] text-xs text-gray-600 tracking-tight">
                三菱地所レジデンス
              </span>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-50 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-800 block transition-all duration-300"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-gray-800 block transition-all duration-300"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-800 block transition-all duration-300"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 flex flex-col justify-center items-center gap-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <motion.span
                className="w-6 h-0.5 bg-gray-800 block"
                style={{ transform: 'rotate(45deg) translateY(3px)' }}
              />
              <motion.span
                className="w-6 h-0.5 bg-gray-800 block"
                style={{ transform: 'rotate(-45deg) translateY(-3px)' }}
              />
            </button>

            {/* Menu Content */}
            <div className="h-full flex flex-col items-center justify-center px-6">
              <div className="max-w-md w-full space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-3xl md:text-4xl font-light tracking-wide transition-colors text-center py-4 border-b border-gray-200 hover:text-secondary ${
                        pathname === item.href ? 'text-secondary font-normal' : 'text-gray-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-8"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block bg-secondary text-white px-8 py-4 rounded-full font-semibold text-center text-xl tracking-wide hover:bg-accent transition-colors"
                  >
                    お問い合わせ
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
