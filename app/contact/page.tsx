'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
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
    <div className="bg-primary min-h-screen text-dark">
      <Navigation />

      {/* Hero Section - KEPT THE SAME */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop&q=90"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="section-container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-4 tracking-wide">お問い合わせ</h1>
          <p className="text-xs md:text-sm text-secondary uppercase tracking-[0.2em] mb-8">Contact</p>
          <p className="text-base md:text-lg text-dark/70 max-w-2xl mx-auto leading-relaxed font-light">
            物件に関するご質問、内覧のご希望など、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif text-dark mb-8">お問い合わせ先</h2>

                {/* Contact Details */}
                <div className="space-y-8">
                  {/* Phone */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-dark/40 mb-3">電話</p>
                    <a href="tel:050-5527-2652" className="text-xl md:text-2xl font-serif text-secondary">
                      050-5527-2652
                    </a>
                    <p className="text-sm text-dark/60 mt-2">平日 10:00～20:00（年中無休）</p>
                  </div>

                  {/* Email */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-dark/40 mb-3">Email</p>
                    <a href="mailto:info@parkhouse-ginza.jp" className="text-lg text-dark">
                      info@parkhouse-ginza.jp
                    </a>
                  </div>

                  {/* Apartment Address */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-dark/40 mb-3">Apartment Address</p>
                    <p className="text-base text-dark/80 leading-relaxed">
                      ザ・パークハウス東銀座<br />
                      〒104-0041<br />
                      東京都中央区新富2丁目7番7号
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-light p-8 md:p-12 border border-dark/10"
              >
                <h3 className="text-2xl font-serif text-dark mb-8">お問い合わせフォーム</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-dark">
                      お名前 <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-primary border border-dark/10 focus:border-secondary focus:outline-none transition-colors text-dark placeholder:text-dark/40"
                      placeholder="山田 太郎"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-dark">
                      メールアドレス <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-light/30 border-2 border-dark/10 focus:border-secondary focus:outline-none transition-colors text-dark placeholder:text-dark/30"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-dark">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-light/30 border-2 border-dark/10 focus:border-secondary focus:outline-none transition-colors text-dark placeholder:text-dark/30"
                      placeholder="090-1234-5678"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-dark">
                      お問い合わせ内容 <span className="text-secondary">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-4 bg-primary border border-dark/10 focus:border-secondary focus:outline-none transition-colors resize-none text-dark placeholder:text-dark/40"
                      placeholder="お問い合わせ内容をご記入ください..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-dark text-white py-5 font-medium text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-secondary hover:text-primary"
                  >
                    送信する
                  </button>
                </form>

                <p className="text-xs text-dark/40 mt-6 text-center">
                  ※お問い合わせから3営業日以内にご返信いたします
                </p>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
