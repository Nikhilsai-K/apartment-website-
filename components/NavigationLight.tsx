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
      setIsScrolled(window.scrollY > 100);
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Collapses on scroll */}
        <AnimatePresence>
          {!isScrolled && (
            <Link href="/">
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className={`text-xl md:text-2xl font-bold font-montserrat tracking-wider cursor-pointer ${
                  isScrolled ? 'text-dark' : 'text-white'
                }`}
              >
                THE PARK HOUSE
                <span className={`ml-2 font-serif ${isScrolled ? 'text-secondary' : 'text-white/90'}`}>東銀座</span>
              </motion.div>
            </Link>
          )}
        </AnimatePresence>

        {/* Desktop Menu - Hidden on scroll for minimal design */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex items-center gap-8"
            >
              {menuItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`relative text-sm font-medium tracking-wide group ${
                      pathname === item.href ? 'text-white' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                        pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </motion.div>
                </Link>
              ))}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-dark px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide hover:bg-white/90 transition-all duration-300 shadow-md"
                >
                  お問い合わせ
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hamburger Menu Button - Always Persistent */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 ml-auto relative z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`w-6 h-0.5 block transition-all duration-300 ${
              isScrolled ? 'bg-dark' : 'bg-white'
            }`}
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`w-6 h-0.5 block transition-all duration-300 ${
              isScrolled ? 'bg-dark' : 'bg-white'
            }`}
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`w-6 h-0.5 block transition-all duration-300 ${
              isScrolled ? 'bg-dark' : 'bg-white'
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/98 backdrop-blur-lg overflow-hidden border-t border-gray-200"
          >
            <div className="px-6 py-8 space-y-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg font-medium tracking-wide transition-colors ${
                      pathname === item.href ? 'text-secondary' : 'text-dark hover:text-secondary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-secondary text-white px-6 py-3 rounded-full font-semibold text-center tracking-wide"
                >
                  お問い合わせ
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
