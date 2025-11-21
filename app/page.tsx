import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Location from '@/components/Location';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Pricing />
      <Location />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
