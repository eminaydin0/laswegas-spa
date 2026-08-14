import { THERAPISTS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-[#fafafa]">
      <div className="w-full px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="section-title mb-4">Uzman Masözler</h2>
            <p className="text-mist-600">Bedeniniz ve zihniniz için mükemmel kaçış</p>
            <div className="gold-rule mt-6" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {THERAPISTS.map((t, index) => (
            <Reveal key={t.name} delay={index * 90}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-card border border-mist-100 hover:border-soft-300 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="aspect-[3/4] overflow-hidden bg-mist-100 relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1.5 bg-soft-500" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-xl text-mist-800">{t.name}</h3>
                  <p className="text-sm text-soft-600 font-semibold mt-1">{t.title}</p>
                  <p className="text-xs text-mist-500 mt-3 leading-relaxed">{t.specialties.join(' · ')}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
