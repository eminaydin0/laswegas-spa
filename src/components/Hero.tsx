import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { CAROUSEL, SALON, SOCIAL } from '@/data';
import { WhatsAppIcon, InstagramIcon } from '@/components/BrandIcons';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = CAROUSEL[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % CAROUSEL.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((current) => (current - 1 + CAROUSEL.length) % CAROUSEL.length);
  const next = () => setIndex((current) => (current + 1) % CAROUSEL.length);

  return (
    <section id="home" className="pt-[68px] md:pt-[76px]">
      <div className="relative w-full overflow-hidden min-h-[78vh] md:min-h-[88vh]">
        {CAROUSEL.map((item, i) => (
          <div
            key={item.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-mist-950/55 via-mist-950/15 to-mist-950/10" />

        <div className="relative z-10 min-h-[78vh] md:min-h-[88vh] flex flex-col justify-end px-5 md:px-8 lg:px-12 pb-10 md:pb-14">
          <div key={index} className="animate-fade-slide">
          <div className="flex items-center gap-2 text-white/85 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            {SALON.city}
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] max-w-2xl drop-shadow-sm">
            {slide.title}
          </h1>
          <p className="mt-4 text-white/90 text-base md:text-lg max-w-md">{slide.text}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="btn-soft">
              Masajları gör
            </a>
            <a
              href={SOCIAL.whatsapp()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:bg-[#1ebe57] transition-colors shadow-card"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-soft"
            >
              <InstagramIcon className="w-4 h-4" />
              Instagram
            </a>
          </div>

          <div className="mt-10 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {CAROUSEL.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Slayt ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Önceki"
                className="w-11 h-11 rounded-full bg-white/90 text-mist-800 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Sonraki"
                className="w-11 h-11 rounded-full bg-white/90 text-mist-800 flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
