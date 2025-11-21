'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import NavigationLight from '@/components/NavigationLight';

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

      {/* Hero with Background */}
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

      <section ref={ref} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-center text-xl text-dark/70 mb-12"
          >
            物件に関するご質問、内覧のご希望など、お気軽にお問い合わせください。
          </motion.p>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="grid sm:grid-cols-2 gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-secondary text-white px-8 py-8 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
            >
              <span className="block text-4xl mb-3">📞</span>
              購入相談
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white text-dark px-8 py-8 rounded-2xl font-bold text-xl border-2 border-secondary shadow-xl hover:shadow-2xl transition-all"
            >
              <span className="block text-4xl mb-3">💰</span>
              無料査定
            </motion.button>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-dark">
                  お名前 <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all text-dark"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-dark">
                  メールアドレス <span className="text-secondary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all text-dark"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-dark">電話番号</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all text-dark"
                placeholder="090-1234-5678"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2 text-dark">
                お問い合わせ内容 <span className="text-secondary">*</span>
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all resize-none text-dark"
                placeholder="お問い合わせ内容をご記入ください..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-secondary text-white px-8 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all"
            >
              送信する
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center text-dark/70"
          >
            <p className="text-lg mb-2">営業時間: 9:00 - 18:00（年中無休）</p>
            <p className="text-sm">※お問い合わせから3営業日以内にご返信いたします。</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
