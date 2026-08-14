import { Link } from 'react-router-dom';
import { SERVICES, SALON } from '@/data';
import Reveal from '@/components/Reveal';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#fafafa]">
      <div className="w-full px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="section-title mb-4">Hizmetlerimizi Keşfedin</h2>
            <p className="text-mist-600 text-base md:text-lg">
              {SALON.nameShort} Spa Salonumuzda siz değerli misafirlerimize hizmet etmekten memnuniyet duyarız.
            </p>
            <div className="gold-rule mt-6" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 80}>
              <Link
                to={`/hizmet/${service.id}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-card border border-mist-100 hover:border-soft-300 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mist-950/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <h3 className="font-display text-2xl text-white">{service.name}</h3>
                    <p className="text-soft-300 text-sm mt-1">{service.nameEn}</p>
                  </div>
                  <div className="absolute top-3 right-3 chip">{service.duration}</div>
                </div>
                <div className="p-5 border-t-4 border-soft-500">
                  <p className="text-sm text-mist-600 leading-relaxed line-clamp-2">{service.description}</p>
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
