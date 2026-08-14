import { IMAGES, SALON, SOCIAL } from '@/data';
import Reveal from '@/components/Reveal';

const HIGHLIGHTS = [
  {
    title: 'Kişiye özel plan',
    text: 'Boyun, bel, stres veya özel gün — seans öncesi kısa görüşmeyle masajı size göre ayarlıyoruz.',
  },
  {
    title: 'Hijyen ve mahremiyet',
    text: 'Her seans sonrası oda temizliği, temiz tekstil ve kapalı özel odalar standartımızdır.',
  },
  {
    title: 'Deneyimli ekip',
    text: 'Klasik, medikal, Thai, aroma terapi, Sultan ve Bali uygulamalarında sertifikalı terapistler.',
  },
  {
    title: 'Kolay iletişim',
    text: 'Form yok. WhatsApp veya Instagram’dan yazın; uygun saati birlikte netleştiriyoruz.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="w-full px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="section-title-dark mb-3">
              Kayseri Melikgazi Masaj ve Spa Salonu
            </h2>
            <p className="text-mist-600 text-base md:text-lg mb-2">{SALON.subtitle}</p>
            <p className="font-display text-2xl md:text-3xl text-soft-500">{SALON.name}</p>
            <div className="gold-rule mt-6" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal className="relative">
            <div className="card-media aspect-[4/5] border-4 border-soft-500/30">
              <img
                src={IMAGES.aboutInterior}
                alt="Laswegas Spa Merkezi iç mekan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 md:left-8 bg-soft-500 text-white px-6 py-4 rounded-md shadow-card">
              <div className="font-display text-3xl">8+</div>
              <div className="text-xs text-white/90 mt-0.5">yıldır Kayseri’de</div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5 text-mist-600 leading-relaxed">
              <p>
                Laswegas Spa Merkezi, {SALON.city} bölgesinde huzur ve rahatlamayı bir arada sunmak
                amacıyla kurulmuştur. Profesyonel terapistlerimizle stres ve yorgunluğunuzu
                atabileceğiniz, kendinizi yenilenmiş hissedeceğiniz bir ortam yaratıyoruz.
              </p>
              <p>
                Hijyen ve müşteri memnuniyetini ön planda tutarak klasik, medikal, Thai, aroma
                terapi, Sultan ve Bali masajlarıyla size en iyi hizmeti sunuyoruz. Sakinleştirici
                atmosferimizde bedeninizi ve zihninizi dinlendirin.
              </p>
              <p>
                {SALON.address} adresindeyiz. Çalışma saatlerimiz {SALON.hours}. Randevu için en
                hızlı yol WhatsApp veya telefon.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="card-gold p-5">
                  <h3 className="font-display text-lg text-soft-600 mb-2">{item.title}</h3>
                  <p className="text-sm text-mist-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href={SOCIAL.whatsapp()} target="_blank" rel="noreferrer" className="btn-primary">
                Hakkımızda · Randevu Al
              </a>
              <a href="#services" className="btn-line">
                Hizmetleri Keşfet
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
