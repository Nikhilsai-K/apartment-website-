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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/98 backdrop-blur-md shadow-lg py-4' : 'bg-primary/80 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold font-montserrat tracking-wider text-dark cursor-pointer"
          >
            THE PARK HOUSE
            <span className="text-secondary ml-2 font-serif">東銀座</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`relative text-sm font-medium tracking-wide group ${
                  pathname === item.href ? 'text-secondary' : 'text-dark'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
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
              className="bg-secondary text-white px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide hover:bg-accent transition-all duration-300 shadow-md"
            >
              お問い合わせ
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-dark block transition-all"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-dark block transition-all"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-dark block transition-all"
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
            className="md:hidden bg-primary/98 backdrop-blur-lg overflow-hidden border-t border-secondary/20"
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
