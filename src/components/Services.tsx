import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data';
import Reveal from '@/components/Reveal';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="w-full px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-label mb-3">Masajlar</p>
            <h2 className="font-display text-3xl md:text-5xl text-mist-900 leading-tight mb-4">
              Fotoğraflara bakın, detaya girin
            </h2>
            <p className="text-mist-600">
              Her masaja tıklayınca bölgeler, faydalar ve seans detaylarını görebilirsiniz.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 80}>
              <Link to={`/hizmet/${service.id}`} className="group block card card-hover h-full overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 chip">{service.duration}</div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-2xl text-mist-900 group-hover:text-soft-700 transition-colors">
                      {service.name}
                    </h3>
                    <span className="w-9 h-9 rounded-full bg-soft-50 text-soft-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-soft-100 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-sm text-mist-500 leading-relaxed line-clamp-3">{service.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
