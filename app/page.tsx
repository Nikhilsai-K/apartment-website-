import NavigationLight from '@/components/NavigationLight';
import HeroWithVideo from '@/components/HeroWithVideo';

export default function Home() {
  return (
    <main className="bg-primary text-dark min-h-screen">
      <NavigationLight />
      <HeroWithVideo />
    </main>
  );
}
