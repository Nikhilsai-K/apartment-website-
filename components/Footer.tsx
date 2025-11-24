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
      <div className="section-container py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold font-serif tracking-wider mb-2 text-dark">
                THE PARK HOUSE
                <span className="text-secondary block mt-1 font-serif text-xl">東銀座</span>
              </h3>
              <div className="h-[1px] w-12 bg-secondary/50 mb-6" />
            </div>

            <div className="text-dark/70 mb-8 leading-relaxed text-sm md:text-base font-light">
              <p className="font-medium text-dark mb-2">お問い合わせ: リテラプロパティーズ銀座店</p>
              <p>〒104-0061</p>
              <p>東京都中央区銀座7-15-11 銀座7ビルディング10F</p>
              <p className="mt-2">TEL: 050-5527-2652</p>
              <p>受付時間: 10:00～20:00【年中無休】</p>
            </div>

            <div className="space-y-2 text-xs md:text-sm text-dark/50 font-light">
              <p>
                <span className="text-dark/70 font-medium mr-2">管理:</span> 三菱地所コミュニティ
              </p>
              <p>
                <span className="text-dark/70 font-medium mr-2">分譲:</span> 三菱地所レジデンス
              </p>
              <p>
                <span className="text-dark/70 font-medium mr-2">施工:</span> 南海辰村建設
              </p>
            </div>
          </div>

          {/* Property Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-secondary uppercase tracking-widest">物件情報</h4>
            <ul className="space-y-4">
              {footerLinks.property.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-dark/60 hover:text-dark transition-colors duration-300 text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-secondary uppercase tracking-widest">サービス</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-dark/60 hover:text-dark transition-colors duration-300 text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-dark/40 tracking-wider">
            &copy; {currentYear} The Park House Higashi-Ginza. All rights reserved.
          </p>

          <Link
            href="/"
            className="text-dark/40 hover:text-dark transition-colors duration-300 text-xs tracking-widest uppercase"
          >
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
}
