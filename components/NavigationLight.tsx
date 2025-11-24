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
    <>
      {/* Floating Container Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-6">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className={`w-full max-w-7xl transition-all duration-500 ${
            isScrolled ? 'mt-2' : 'mt-0'
          }`}
        >
          <div
            className={`backdrop-blur-md rounded-2xl shadow-lg px-6 flex items-center justify-between transition-all duration-500 relative overflow-hidden ${
              isScrolled ? 'py-3' : 'py-5'
            }`}
            style={{
              background: isScrolled
                ? 'rgba(255, 255, 255, 0.95)'
                : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%)',
              border: isScrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Logo - Collapses on scroll */}
            <AnimatePresence>
              {!isScrolled && (
                <Link href="/">
                  <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-xl md:text-2xl font-bold font-[family-name:var(--font-montserrat)] tracking-wider cursor-pointer text-white"
                  >
                    THE PARK HOUSE
                    <span className="ml-2 font-serif text-white/90">東銀座</span>
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
                          pathname === item.href
                            ? 'text-white'
                            : 'text-white/90 hover:text-white'
                        }`}
                      >
                        {item.label}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                            pathname === item.href
                              ? 'w-full'
                              : 'w-0 group-hover:w-full'
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
                animate={
                  isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
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
                animate={
                  isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className={`w-6 h-0.5 block transition-all duration-300 ${
                  isScrolled ? 'bg-dark' : 'bg-white'
                }`}
              />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-24 left-6 right-6 z-40 bg-white/98 backdrop-blur-lg overflow-hidden border border-gray-200 rounded-2xl shadow-xl"
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
                      pathname === item.href
                        ? 'text-secondary'
                        : 'text-dark hover:text-secondary'
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
    </>
  );
}
