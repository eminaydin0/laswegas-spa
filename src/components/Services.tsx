import { Link } from 'react-router-dom';
import { SERVICES, SALON } from '@/data';
import Reveal from '@/components/Reveal';

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[#fafafa]">
      <div className="page-shell">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title mb-3">Hizmetlerimizi Keşfedin</h2>
            <p className="section-lead">
              {SALON.nameShort} Spa’da siz değerli misafirlerimize hizmet etmekten memnuniyet duyarız.
            </p>
            <div className="gold-rule mt-6" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 70}>
              <Link
                to={`/hizmet/${service.id}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-card border border-mist-100 hover:border-soft-300 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mist-950/75 via-mist-950/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4 md:p-5">
                    <h3 className="font-display text-xl md:text-2xl text-white leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-soft-300 text-sm mt-1">{service.nameEn}</p>
                  </div>
                  <div className="absolute top-3 right-3 chip">{service.duration}</div>
                </div>
                <div className="flex flex-col flex-1 p-5 border-t-4 border-soft-500 min-h-[112px]">
                  <p className="text-sm text-mist-600 leading-relaxed line-clamp-2 flex-1">
                    {service.description}
                  </p>
                  <span className="inline-block mt-4 text-sm font-semibold text-soft-600 group-hover:text-soft-500">
                    İncele →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
