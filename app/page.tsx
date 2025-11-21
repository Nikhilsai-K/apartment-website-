import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <Hero />
      <Gallery />

      {/* More sections coming... */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">🚀 Advanced Next.js Website</h2>
        <p className="text-xl">With Framer Motion, GSAP, Swiper, Lenis & TypeScript!</p>
        <p className="text-gray-400 mt-4">More sections being built...</p>
      </section>
    </main>
  );
}
