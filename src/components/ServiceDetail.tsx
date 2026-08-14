import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock3, Droplets, Gauge } from 'lucide-react';
import { getServiceById, SERVICES, SOCIAL, whatsappLink } from '@/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WhatsAppIcon, InstagramIcon } from '@/components/BrandIcons';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = id ? getServiceById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <Navigate to="/" replace />;

  const others = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      <main className="pt-[108px] md:pt-[116px]">
        <div className="w-full">
          <div className="relative h-[48vh] min-h-[320px] overflow-hidden">
            <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-mist-950/60 via-mist-950/15 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 px-5 md:px-8 lg:px-12 pb-8 md:pb-10">
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white mb-4"
              >
                <ArrowLeft className="w-4 h-4" /> Tüm masajlar
              </Link>
              <p className="text-[11px] tracking-[0.22em] uppercase text-soft-200 mb-2">{service.nameEn}</p>
              <h1 className="font-display text-4xl md:text-5xl text-white">{service.name}</h1>
            </div>
          </div>

          <div className="px-5 md:px-8 lg:px-12 py-12 md:py-16">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-soft-500 mb-3">Bu masaj nedir?</h2>
                  <p className="text-mist-600 leading-relaxed text-lg">{service.detailIntro}</p>
                  <p className="text-mist-600 leading-relaxed mt-4">{service.longDescription}</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-mist-900 mb-3">Teknik</h2>
                  <p className="text-mist-600 leading-relaxed">{service.technique}</p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-mist-900 mb-4">Nasıl işe yarar?</h2>
                  <ol className="space-y-3">
                    {service.howItWorks.map((step, i) => (
                      <li key={step} className="flex gap-4 text-mist-600 leading-relaxed card p-4">
                        <span className="font-display text-soft-600 text-lg shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-mist-900 mb-4">Hangi bölgeler için?</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.regions.map((r) => (
                      <div key={r} className="card px-4 py-3 text-sm text-mist-700">
                        {r}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-mist-900 mb-4">Faydaları</h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="text-sm text-mist-600 bg-soft-50/80 rounded-2xl px-4 py-3 border border-soft-100">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-mist-900 mb-3">Kimlere uygun?</h2>
                  <ul className="space-y-2">
                    {service.bestFor.map((item) => (
                      <li key={item} className="text-mist-600 text-sm leading-relaxed pl-4 border-l-2 border-soft-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-mist-900 mb-3">Seans akışı</h2>
                  <ol className="space-y-2">
                    {service.sessionFlow.map((s, i) => (
                      <li key={s} className="flex gap-3 text-sm text-mist-600">
                        <span className="text-soft-600 font-medium">{i + 1}.</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="card p-5">
                    <h3 className="font-display text-xl text-mist-900 mb-3">Seans sonrası</h3>
                    <ul className="space-y-2 text-sm text-mist-600">
                      {service.aftercare.map((a) => (
                        <li key={a}>· {a}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="card p-5">
                    <h3 className="font-display text-xl text-mist-900 mb-3">Dikkat / kaçının</h3>
                    <ul className="space-y-2 text-sm text-mist-600">
                      {service.avoidIf.map((a) => (
                        <li key={a}>· {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-4 lg:col-start-9">
                <div className="lg:sticky lg:top-32 card p-6 space-y-5 border-t-4 border-t-soft-500">
                  <div className="flex items-center gap-3 text-sm text-mist-700">
                    <Clock3 className="w-4 h-4 text-soft-500" />
                    Süre: {service.duration}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-mist-700">
                    <Gauge className="w-4 h-4 text-soft-500" />
                    Yoğunluk: {service.intensity}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-mist-700">
                    <Droplets className="w-4 h-4 text-soft-500" />
                    {service.oil}
                  </div>

                  <div className="border-t border-mist-100 pt-5 space-y-3">
                    <a
                      href={whatsappLink(`Merhaba, ${service.name} hakkında bilgi ve randevu istiyorum.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary w-full"
                    >
                      Tıkla Randevu Al
                    </a>
                    <a
                      href={whatsappLink(`Merhaba, ${service.name} hakkında bilgi ve randevu istiyorum.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1ebe57]"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      WhatsApp’tan sor
                    </a>
                    <a
                      href={SOCIAL.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-line w-full"
                    >
                      <InstagramIcon className="w-4 h-4" />
                      Instagram DM
                    </a>
                  </div>
                </div>
              </aside>
            </div>

            <div className="mt-16 pt-10 border-t border-mist-200/80">
              <h2 className="font-display text-2xl text-mist-900 mb-6">Diğer masajlar</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {others.map((s) => (
                  <Link key={s.id} to={`/hizmet/${s.id}`} className="group card card-hover overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-lg text-mist-900 group-hover:text-soft-700">{s.name}</h3>
                      <p className="text-xs text-mist-500 mt-1">{s.duration}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
