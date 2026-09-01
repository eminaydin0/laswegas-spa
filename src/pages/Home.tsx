import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Social from '@/components/Social';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Social />
      </main>
      <Footer />
    </div>
  );
}
