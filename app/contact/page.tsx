'use client';

import { useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
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
    <div className="bg-primary min-h-screen text-dark">
      <Navigation />

      {/* Clean Header with Background */}
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

      <section ref={ref} className="bg-primary">
        <div className="section-container py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-6 mb-20">
              <button className="bg-light border border-dark/5 p-10 text-center transition-all duration-300 hover:border-secondary hover:shadow-2xl group">
                <span className="block text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📞</span>
                <span className="block text-xl font-serif text-dark mb-2">購入相談</span>
                <span className="text-sm text-dark/50 font-light">お電話でのご相談はこちら</span>
              </button>
              <button className="bg-light border border-dark/5 p-10 text-center transition-all duration-300 hover:border-secondary hover:shadow-2xl group">
                <span className="block text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</span>
                <span className="block text-xl font-serif text-dark mb-2">無料査定</span>
                <span className="text-sm text-dark/50 font-light">物件の査定依頼はこちら</span>
              </button>
            </div>

            {/* Contact Form */}
            <div className="bg-light p-8 md:p-16 shadow-2xl">
              <h2 className="text-2xl font-serif text-dark mb-10 text-center">お問い合わせフォーム</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-xs font-medium mb-3 text-dark/60 uppercase tracking-widest">
                      Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border border-dark/10 focus:border-secondary focus:ring-0 transition-colors text-primary font-light placeholder:text-primary/40"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-3 text-dark/60 uppercase tracking-widest">
                      Email <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border border-dark/10 focus:border-secondary focus:ring-0 transition-colors text-primary font-light placeholder:text-primary/40"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-xs font-medium mb-3 text-dark/60 uppercase tracking-widest">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-primary border border-dark/10 focus:border-secondary focus:ring-0 transition-colors text-dark font-light placeholder:text-dark/20"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className="mb-12">
                  <label className="block text-xs font-medium mb-3 text-dark/60 uppercase tracking-widest">
                    Message <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-white border border-dark/10 focus:border-secondary focus:ring-0 transition-colors resize-none text-primary font-light placeholder:text-primary/40"
                    placeholder="お問い合わせ内容をご記入ください..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-primary px-8 py-5 font-medium text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-secondary hover:text-dark hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-16 text-center text-dark/40 font-light">
              <p className="text-sm mb-2">営業時間: 9:00 - 18:00（年中無休）</p>
              <p className="text-xs tracking-wide">※お問い合わせから3営業日以内にご返信いたします。</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
