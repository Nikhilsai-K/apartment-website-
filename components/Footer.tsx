'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    property: [
      { label: '概要', href: '/about' },
      { label: 'ギャラリー', href: '/gallery' },
      { label: 'アクセス', href: '/location' },
      { label: 'レビュー', href: '/reviews' },
    ],
    services: [
      { label: '購入相談', href: '/contact' },
      { label: '無料査定', href: '/contact' },
      { label: '資料請求', href: '/contact' },
      { label: '内覧予約', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-light border-t border-dark/10 text-dark">
      <div className="section-container py-8 pb-3">{/* Minimal bottom padding */}
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-6 mb-6">
          {/* Brand & Contact - Takes up more space */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold font-serif tracking-wider text-dark mb-2">
              THE PARK HOUSE
              <span className="text-secondary ml-2 font-serif">東銀座</span>
            </h3>
            <div className="h-[2px] w-16 bg-secondary mb-4" />

            <div className="space-y-2 text-base text-dark/70 leading-relaxed">
              <div>
                <p className="font-semibold text-dark text-lg mb-1">リテラプロパティーズ銀座店</p>
                <p>〒104-0061 東京都中央区銀座7-15-11</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pt-1">
                <div>
                  <span className="text-sm text-dark/50 uppercase tracking-wider block mb-0.5">Phone</span>
                  <a href="tel:050-5527-2652" className="text-secondary font-medium">
                    050-5527-2652
                  </a>
                </div>
                <div>
                  <span className="text-sm text-dark/50 uppercase tracking-wider block mb-0.5">Hours</span>
                  <p className="text-dark/70">10:00～20:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {/* Property Info */}
            <div>
              <h4 className="text-base font-bold mb-3 text-dark uppercase tracking-wider">物件情報</h4>
              <ul className="space-y-2">
                {footerLinks.property.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-dark/60 text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base font-bold mb-3 text-dark uppercase tracking-wider">サービス</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-dark/60 text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Property Details */}
            <div>
              <h4 className="text-base font-bold mb-3 text-dark uppercase tracking-wider">詳細</h4>
              <ul className="space-y-2 text-sm text-dark/60">
                <li className="flex items-center gap-2">
                  <span className="text-secondary">▪</span> 管理: 三菱地所コミュニティ
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">▪</span> 分譲: 三菱地所レジデンス
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">▪</span> 竣工: 2015年11月
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">▪</span> 総戸数: 36戸 (13F-B1F)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Compact */}
        <div className="pt-4 border-t border-dark/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-sm text-dark/40 tracking-wide">
            &copy; {currentYear} The Park House Higashi-Ginza. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-dark/50 text-sm uppercase tracking-widest flex items-center gap-2"
            >
              <span>Top</span>
              <span>↑</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
