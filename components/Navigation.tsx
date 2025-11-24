'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  // Check if we're on homepage
  const isHomePage = pathname === '/';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'bg-primary backdrop-blur-xl py-4 shadow-lg'
          : 'bg-gradient-to-b from-black/60 to-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-50 group">
          <div className="flex flex-col">
            <span
              className={`text-2xl font-serif tracking-[0.2em] transition-colors duration-300 ${
                isScrolled || !isHomePage ? 'text-dark' : 'text-white'
              }`}
            >
              THE PARK HOUSE
            </span>
            <span
              className={`text-xs tracking-[0.4em] font-light transition-colors duration-300 ${
                isScrolled || !isHomePage ? 'text-secondary' : 'text-white/80'
              }`}
            >
              HIGASHI-GINZA
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm tracking-[0.2em] hover:text-secondary transition-colors duration-300 uppercase relative group ${
                pathname === item.href
                  ? isScrolled || !isHomePage
                    ? 'text-secondary'
                    : 'text-white'
                  : isScrolled || !isHomePage
                  ? 'text-dark/70'
                  : 'text-white/70'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-2 left-0 h-[1px] bg-secondary transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-8 py-3 border transition-all duration-300 text-xs tracking-[0.2em] uppercase ${
              isScrolled || !isHomePage
                ? 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                : 'border-white/30 text-white hover:bg-white hover:text-dark'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
        >
          <span
            className={`h-[1px] transition-all duration-300 ${
              isOpen
                ? 'w-6 rotate-45 translate-y-2.5'
                : 'w-8 group-hover:w-10'
            } ${isScrolled || !isHomePage ? 'bg-dark' : 'bg-white'}`}
          />
          <span
            className={`h-[1px] transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'w-6 group-hover:w-10'
            } ${isScrolled || !isHomePage ? 'bg-dark' : 'bg-white'}`}
          />
          <span
            className={`h-[1px] transition-all duration-300 ${
              isOpen
                ? 'w-6 -rotate-45 -translate-y-2.5'
                : 'w-4 group-hover:w-10'
            } ${isScrolled || !isHomePage ? 'bg-dark' : 'bg-white'}`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-white/98 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
            >
              <div className="flex flex-col items-center gap-10">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-serif text-dark hover:text-secondary transition-colors duration-300 tracking-widest"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="px-10 py-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 text-sm tracking-[0.3em] uppercase"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
