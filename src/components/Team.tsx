import { THERAPISTS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white/40">
      <div className="w-full px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="section-label mb-3">Ekibimiz</p>
            <h2 className="font-display text-3xl md:text-5xl text-mist-900 leading-tight">
              Terapistlerimiz
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {THERAPISTS.map((t, index) => (
            <Reveal key={t.name} delay={index * 90}>
              <article className="card card-hover overflow-hidden h-full">
                <div className="aspect-[3/4] overflow-hidden bg-mist-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-mist-900">{t.name}</h3>
                  <p className="text-sm text-soft-600 mt-1">{t.title}</p>
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
