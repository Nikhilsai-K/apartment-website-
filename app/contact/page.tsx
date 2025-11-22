'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import NavigationLight from '@/components/NavigationLight';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      <NavigationLight />

      {/* Clean Header */}
      <section className="pt-32 pb-16 px-6 bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-dark mb-3 tracking-tight">お問い合わせ</h1>
          <p className="text-sm text-dark/60 uppercase tracking-widest mb-6">Contact</p>
          <p className="text-base text-dark/70 max-w-2xl mx-auto">
            物件に関するご質問、内覧のご希望など、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section ref={ref} className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Quick Actions */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <button className="bg-primary border-2 border-dark px-8 py-8 font-light text-lg transition-colors hover:bg-dark hover:text-white">
              <span className="block text-2xl mb-3">📞</span>
              購入相談
            </button>
            <button className="bg-primary border-2 border-dark px-8 py-8 font-light text-lg transition-colors hover:bg-dark hover:text-white">
              <span className="block text-2xl mb-3">💰</span>
              無料査定
            </button>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-primary p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-medium mb-2 text-dark uppercase tracking-wider">
                  お名前 <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary text-dark"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-dark uppercase tracking-wider">
                  メールアドレス <span className="text-secondary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary text-dark"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-medium mb-2 text-dark uppercase tracking-wider">電話番号</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary text-dark"
                placeholder="090-1234-5678"
              />
            </div>

            <div className="mb-8">
              <label className="block text-xs font-medium mb-2 text-dark uppercase tracking-wider">
                お問い合わせ内容 <span className="text-secondary">*</span>
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary resize-none text-dark"
                placeholder="お問い合わせ内容をご記入ください..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-dark text-white px-8 py-4 font-light text-lg uppercase tracking-widest transition-colors hover:bg-secondary"
            >
              送信する
            </button>
          </form>

          <div className="mt-12 text-center text-dark/60">
            <p className="text-sm mb-1">営業時間: 9:00 - 18:00（年中無休）</p>
            <p className="text-xs">※お問い合わせから3営業日以内にご返信いたします。</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
