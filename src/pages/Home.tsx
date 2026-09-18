import { useMemo } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Social from '@/components/Social';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { getHomeSeo } from '@/seo';

export default function Home() {
  const seo = useMemo(() => getHomeSeo(), []);
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Seo page={seo} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Social />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
