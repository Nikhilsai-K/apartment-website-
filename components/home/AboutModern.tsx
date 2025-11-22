'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutModern() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

    return (
        <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                {/* Strict 12-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    {/* Text Content - Spans 5 columns */}
                    <div className="md:col-span-5 relative z-10 order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-[1px] w-12 bg-secondary" />
                                <span className="text-secondary text-xs uppercase tracking-[0.2em] font-bold">
                                    Concept
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark mb-8 leading-[1.1]">
                                銀座を、<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark to-dark/60">
                                    暮らしの庭
                                </span>
                                にする。
                            </h2>

                            <div className="space-y-6 text-dark/70 font-light leading-relaxed text-base md:text-lg">
                                <p>
                                    三菱地所レジデンスが贈る、最高峰の邸宅「ザ・パークハウス」。
                                    華やぎと静寂が交差する東銀座の地で、新しいラグジュアリーの形をご提案します。
                                </p>
                                <p>
                                    全戸南向きの開放的な設計。
                                    光と風が通り抜ける空間は、都会にいることを忘れさせるほどの静寂に包まれています。
                                </p>
                            </div>

                            <div className="mt-10">
                                <Link href="/about">
                                    <motion.button
                                        whileHover={{ x: 10 }}
                                        className="group flex items-center gap-3 text-dark font-medium"
                                    >
                                        <span className="border-b border-dark pb-1 group-hover:border-secondary group-hover:text-secondary transition-colors">
                                            Read Full Story
                                        </span>
                                        <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Spacer - Spans 1 column */}
                    <div className="hidden md:block md:col-span-1 order-1 md:order-2" />

                    {/* Image Section - Spans 6 columns */}
                    <div className="md:col-span-6 relative order-1 md:order-3">
                        {/* Main Image Container - Fixed Aspect Ratio 4:5 for vertical elegance */}
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                                <Image
                                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=1600&fit=crop&q=90"
                                    alt="The Park House Exterior"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Floating Detail Card - Perfectly positioned */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-[240px] z-20 border-t-4 border-secondary"
                        >
                            <div className="flex flex-col gap-4">
                                <div>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Floors</span>
                                    <span className="font-serif text-3xl text-dark">13<span className="text-sm ml-1">F</span></span>
                                </div>
                                <div className="w-full h-[1px] bg-gray-100" />
                                <div>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Units</span>
                                    <span className="font-serif text-3xl text-dark">36<span className="text-sm ml-1">residences</span></span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
