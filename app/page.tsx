import NavigationLight from '@/components/NavigationLight';
import HeroWithVideo from '@/components/HeroWithVideo';
import AboutPreview from '@/components/home/AboutPreview';
import GalleryPreview from '@/components/home/GalleryPreview';
import LocationPreview from '@/components/home/LocationPreview';
import ReviewsPreview from '@/components/home/ReviewsPreview';
import ContactPreview from '@/components/home/ContactPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-primary text-dark min-h-screen">
      <NavigationLight />
      <HeroWithVideo />
      <AboutPreview />
      <GalleryPreview />
      <LocationPreview />
      <ReviewsPreview />
      <ContactPreview />
      <Footer />
    </main>
  );
}
