import { FAQS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Faq() {
  return (
    <section id="faq" className="section-pad bg-[#fafafa]" aria-labelledby="faq-heading">
      <div className="page-shell max-w-3xl">
        <Reveal>
          <div className="section-head">
            <h2 id="faq-heading" className="section-title mb-3">
              Sık Sorulan Sorular
            </h2>
            <p className="section-lead">Kayseri Kocasınan masaj ve spa hakkında net bilgiler.</p>
            <div className="gold-rule mt-6" />
          </div>
        </Reveal>
        <div className="space-y-3">
          {FAQS.map((item, index) => (
            <Reveal key={item.q} delay={index * 60}>
              <details className="card p-5 group">
                <summary className="font-display text-lg text-mist-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-soft-500 text-xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-mist-600 text-sm md:text-base leading-relaxed mt-3">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
