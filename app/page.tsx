import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutModern from '@/components/home/AboutModern';
import GalleryModern from '@/components/home/GalleryModern';
import LocationPreview from '@/components/home/LocationPreview';
import ReviewsPreview from '@/components/home/ReviewsPreview';
import ContactPreview from '@/components/home/ContactPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-primary text-dark min-h-screen">
      <Navigation />
      <Hero />
      <AboutModern />
      <GalleryModern />
      <LocationPreview />
      <ReviewsPreview />
      <ContactPreview />
      <Footer />
    </main>
  );
}
