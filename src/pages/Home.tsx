import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Social from '@/components/Social';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8f6]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Team />
        <Testimonials />
        <Social />
      </main>
      <Footer />
    </div>
  );
}
