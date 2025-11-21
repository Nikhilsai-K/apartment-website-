'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import NavigationLight from '@/components/NavigationLight';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    <div className="bg-primary min-h-screen">
      <NavigationLight />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=90"
          alt="Contact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-4">お問い合わせ</h1>
          <p className="text-xl text-dark/80">Contact Us</p>
        </motion.div>
      </section>

      <section ref={ref} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-center text-lg text-dark/70 mb-10"
          >
            物件に関するご質問、内覧のご希望など、お気軽にお問い合わせください。
          </motion.p>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="grid sm:grid-cols-2 gap-4 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-secondary text-white px-6 py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <span className="block text-3xl mb-2">📞</span>
              購入相談
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-white text-dark px-6 py-6 rounded-xl font-bold text-lg border-2 border-secondary shadow-lg hover:shadow-xl transition-all"
            >
              <span className="block text-3xl mb-2">💰</span>
              無料査定
            </motion.button>
          </motion.div>

          {/* Contact Form - Smaller containers */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-dark">
                  お名前 <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-primary/50 border border-secondary/30 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all text-dark"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-dark">
                  メールアドレス <span className="text-secondary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-primary/50 border border-secondary/30 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all text-dark"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1.5 text-dark">電話番号</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-primary/50 border border-secondary/30 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all text-dark"
                placeholder="090-1234-5678"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-1.5 text-dark">
                お問い合わせ内容 <span className="text-secondary">*</span>
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2.5 bg-primary/50 border border-secondary/30 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all resize-none text-dark"
                placeholder="お問い合わせ内容をご記入ください..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              送信する
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center text-dark/70"
          >
            <p className="text-base mb-1">営業時間: 9:00 - 18:00（年中無休）</p>
            <p className="text-sm">※お問い合わせから3営業日以内にご返信いたします。</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
