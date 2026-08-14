import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CAROUSEL, SALON, SOCIAL } from '@/data';

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
    <section id="home" className="pt-[108px] md:pt-[116px]">
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

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 min-h-[78vh] md:min-h-[88vh] flex flex-col items-center justify-center text-center page-shell">
          <div key={index} className="animate-fade-slide max-w-2xl w-full">
            <p className="text-soft-300 text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-4">
              {SALON.subtitle}
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-[4.25rem] text-white leading-[1.08] drop-shadow-sm text-balance">
              {slide.title}
            </h1>
            <p className="mt-5 text-white/90 text-base md:text-lg max-w-lg mx-auto">{slide.text}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={SOCIAL.whatsapp()} target="_blank" rel="noreferrer" className="btn-primary text-base px-8 py-4">
                Tıkla Randevu Al
              </a>
              <a href={`tel:${SALON.phoneTel}`} className="btn-soft">
                Hemen Ara
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 inset-x-0">
            <div className="page-shell flex items-center justify-between">
              <div className="flex gap-2">
                {CAROUSEL.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Slayt ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? 'w-8 bg-soft-500' : 'w-1.5 bg-white/45 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Önceki"
                  className="w-11 h-11 rounded-md bg-soft-500 text-white flex items-center justify-center hover:bg-soft-600 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Sonraki"
                  className="w-11 h-11 rounded-md bg-soft-500 text-white flex items-center justify-center hover:bg-soft-600 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-soft-500 text-white">
        <div className="page-shell py-5 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-display text-xl md:text-2xl max-w-xl">
            Günün stresini ve yorgunluğunu atmak ister misiniz?
          </p>
          <a
            href={SOCIAL.whatsapp()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white text-soft-700 px-6 py-3 text-sm font-semibold hover:bg-soft-50 transition-colors shrink-0"
          >
            Hemen Randevu Alın
          </a>
        </div>
      </div>
    </section>
  );
}
