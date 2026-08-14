import { THERAPISTS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Team() {
  return (
    <section id="team" className="section-pad bg-[#fafafa]">
      <div className="page-shell">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title mb-3">Uzman Masözler</h2>
            <p className="section-lead">Bedeniniz ve zihniniz için mükemmel kaçış</p>
            <div className="gold-rule mt-6" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {THERAPISTS.map((t, index) => (
            <Reveal key={t.name} delay={index * 70}>
              <article className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-card border border-mist-100 hover:border-soft-300 hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden bg-mist-100 relative shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1.5 bg-soft-500" />
                </div>
                <div className="p-5 text-center flex flex-col flex-1 min-h-[108px]">
                  <h3 className="font-display text-lg text-mist-800 leading-tight">{t.name}</h3>
                  <p className="text-sm text-soft-600 font-semibold mt-1">{t.title}</p>
                  <p className="text-xs text-mist-500 mt-3 leading-relaxed line-clamp-2">
                    {t.specialties.join(' · ')}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
