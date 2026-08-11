import { IMAGES, SALON, SOCIAL } from '@/data';
import { WhatsAppIcon, InstagramIcon } from '@/components/BrandIcons';
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
    <section id="about" className="py-20 md:py-28">
      <div className="w-full px-5 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal className="relative lg:sticky lg:top-28">
            <div className="card-media aspect-[4/5]">
              <img
                src={IMAGES.aboutInterior}
                alt="Laswegas Spa Merkezi iç mekan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 md:left-8 card px-5 py-4">
              <div className="font-display text-3xl text-soft-700">8+</div>
              <div className="text-xs text-mist-500 mt-0.5">yıldır Kayseri’de</div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="section-label mb-3">Hakkımızda</p>
            <h2 className="font-display text-3xl md:text-5xl text-mist-900 leading-tight mb-6">
              Laswegas Spa Merkezi kimdir?
            </h2>

            <div className="space-y-5 text-mist-600 leading-relaxed">
              <p>
                Laswegas Spa Merkezi, {SALON.city} bölgesinde hizmet veren bir masaj ve spa
                merkezidir. Amacımız lüks abartısı olmadan; temiz, sakin ve gerçekten dinlendiren
                bir ortam sunmak. Misafirlerimizin çoğu ofis yorgunluğu, boyun–omuz sertliği, bel
                rahatsızlığı veya özel bir gün için kendine zaman ayırmak isteyenlerden oluşur.
              </p>
              <p>
                Merkezimizde klasik masaj, medikal (derin doku) masaj, Thai masajı, aroma terapi,
                Sultan ritüeli ve sıcak taşlı Bali masajı uyguluyoruz. Seans öncesinde şikâyetinizi
                dinliyor, baskı şiddetini ve odak bölgeyi birlikte seçiyoruz. Yağlı veya yağsız
                (Thai) tercihinize göre protokol değişir.
              </p>
              <p>
                {SALON.address} adresindeyiz. Çalışma saatlerimiz {SALON.hours}. Randevu için web
                formu kullanmıyoruz; en hızlı yol WhatsApp. Instagram’dan da DM atabilirsiniz.
                İlk gelen misafirlerimize konum pin’i ve kısa yol tarifi de gönderiyoruz.
              </p>
              <p>
                Hijyen, mahremiyet ve randevu saatine sadakat bizim için pazarlama cümlesi değil,
                günlük işleyiş. Odaya girdiğinizde loş ışık, sakin müzik ve terapistin size özel
                temposuyla seansa başlarsınız. Seans bitiminde bol su ve kısa dinlenme öneriyoruz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="card p-5"
                >
                  <h3 className="font-display text-lg text-mist-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-mist-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={SOCIAL.whatsapp()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary bg-[#25D366] hover:bg-[#1ebe57]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp’tan yaz
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-line"
              >
                <InstagramIcon className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
