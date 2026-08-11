import { TESTIMONIALS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="w-full px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="section-label mb-3">Yorumlar</p>
            <h2 className="font-display text-3xl md:text-5xl text-mist-900 leading-tight">
              Misafirlerimiz ne diyor?
            </h2>
            <p className="text-sm text-mist-500 mt-3">4.8 / 5 · 180+ yorum</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <blockquote className="card p-7 md:p-8 h-full">
                <p className="text-mist-700 leading-relaxed font-display text-lg italic">
                  “{item.text}”
                </p>
                <footer className="mt-7 flex items-center gap-3 pt-5 border-t border-mist-100">
                  <div className="w-11 h-11 rounded-full bg-soft-50 text-soft-700 flex items-center justify-center font-display text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-medium text-mist-900">{item.name}</cite>
                    <div className="text-xs text-mist-500">{item.role}</div>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
