import { IMAGES, SALON, SOCIAL } from '@/data';
import Reveal from '@/components/Reveal';

const HIGHLIGHTS = [
  {
    title: 'Kişiye özel plan',
    text: 'Boyun, bel, stres veya özel gün — seansı size göre ayarlıyoruz.',
  },
  {
    title: 'Hijyen ve mahremiyet',
    text: 'Temiz tekstil, kapalı odalar ve her seans sonrası temizlik.',
  },
  {
    title: 'Deneyimli ekip',
    text: 'Klasik, medikal, mix, soft, aroma, Sultan ve Bali uygulamaları.',
  },
  {
    title: 'Kolay iletişim',
    text: 'WhatsApp veya telefondan yazın; saati birlikte netleştiriyoruz.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="page-shell">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title-dark mb-3 text-balance">
              Kayseri Kocasınan Masaj ve Spa Salonu
            </h2>
            <p className="section-lead mb-1">{SALON.subtitle}</p>
            <p className="font-display text-xl md:text-2xl text-soft-500">{SALON.name}</p>
            <div className="gold-rule mt-6" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal>
            <div className="media-frame aspect-square">
              <img
                src={IMAGES.aboutInterior}
                alt="Laswegas Spa Merkezi iç mekan"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col justify-center">
              <div className="space-y-4 text-mist-600 leading-relaxed text-[15px] md:text-base">
                <p>
                  Laswegas Spa Merkezi, {SALON.city} bölgesinde huzur ve rahatlamayı bir arada
                  sunmak amacıyla kurulmuştur. Profesyonel terapistlerimizle stres ve
                  yorgunluğunuzu atabileceğiniz sakin bir ortam yaratıyoruz.
                </p>
                <p>
                  Hijyen ve müşteri memnuniyetini ön planda tutarak klasik, medikal, mix, soft,
                  aroma terapi, Sultan ve Bali masajlarıyla hizmet veriyoruz.
                </p>
                <p>
                  {SALON.addressShort}, {SALON.city}. Saatlerimiz {SALON.hours}. Randevu için
                  WhatsApp veya telefon yeterlidir.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.title} className="card-gold p-4 min-h-[112px]">
                    <h3 className="font-display text-base text-soft-600 mb-1.5">{item.title}</h3>
                    <p className="text-xs text-mist-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a href={SOCIAL.whatsapp()} target="_blank" rel="noreferrer" className="btn-primary">
                  Randevu Al
                </a>
                <a href="#services" className="btn-line">
                  Hizmetleri Keşfet
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
