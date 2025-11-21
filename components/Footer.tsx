'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    property: [
      { label: '概要', href: '#about' },
      { label: 'ギャラリー', href: '#gallery' },
      { label: 'アクセス', href: '#location' },
      { label: 'レビュー', href: '#reviews' },
    ],
    services: [
      { label: '購入相談', href: '#contact' },
      { label: '無料査定', href: '#contact' },
      { label: '資料請求', href: '#contact' },
      { label: '内覧予約', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold font-montserrat tracking-wider mb-2">
                THE PARK HOUSE
                <span className="text-secondary block mt-1 font-serif">東銀座</span>
              </h3>
              <div className="h-1 w-20 bg-secondary mb-4" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mb-4 leading-relaxed"
            >
              〒104-0041
              <br />
              東京都中央区新富2丁目7番7号
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2 text-sm text-gray-400"
            >
              <p>
                <span className="text-secondary font-semibold">管理:</span> 三菱地所コミュニティ
              </p>
              <p>
                <span className="text-secondary font-semibold">分譲:</span> 三菱地所レジデンス
              </p>
              <p>
                <span className="text-secondary font-semibold">施工:</span> 南海辰村建設
              </p>
            </motion.div>
          </div>

          {/* Property Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-6 text-secondary">物件情報</h4>
            <ul className="space-y-3">
              {footerLinks.property.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-6 text-secondary">サービス</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {currentYear} The Park House Higashi-Ginza. All rights reserved.
            </p>

            {/* Social/Quick Links */}
            <div className="flex gap-6">
              <Link
                href="#home"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
              >
                <span className="text-sm tracking-wide">トップへ戻る ↑</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="w-16 h-16 border-2 border-secondary/30 rounded-full flex items-center justify-center"
          >
            <div className="w-8 h-8 bg-secondary/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
