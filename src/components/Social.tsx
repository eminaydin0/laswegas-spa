import { MapPin } from 'lucide-react';
import { SALON, SOCIAL } from '@/data';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '@/components/BrandIcons';
import Reveal from '@/components/Reveal';

const LINKS = [
  {
    name: 'WhatsApp',
    handle: SALON.phone,
    href: SOCIAL.whatsapp(),
    text: 'Randevu ve sorular için en hızlı yol',
    icon: WhatsAppIcon,
    tone: 'bg-[#25D366] text-white',
    badge: 'Önerilen',
  },
  {
    name: 'Instagram',
    handle: '@laswegasspa',
    href: SOCIAL.instagram,
    text: 'Seans kareleri, hikâyeler ve DM',
    icon: InstagramIcon,
    tone: 'bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white',
  },
  {
    name: 'Facebook',
    handle: 'Laswegas Spa',
    href: SOCIAL.facebook,
    text: 'Haberler ve misafir yorumları',
    icon: FacebookIcon,
    tone: 'bg-[#1877F2] text-white',
  },
  {
    name: 'Konum',
    handle: 'Melikgazi / Kayseri',
    href: SOCIAL.maps,
    text: SALON.address,
    icon: MapPin,
    tone: 'bg-soft-600 text-white',
  },
];

export default function Social() {
  return (
    <section id="social" className="py-20 md:py-28">
      <div className="w-full px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label mb-3">İletişim & sosyal</p>
            <h2 className="font-display text-3xl md:text-5xl text-mist-900 leading-tight mb-4">
              WhatsApp, Instagram ve daha fazlası
            </h2>
            <p className="text-mist-600">
              Randevu için form yok. Aşağıdaki kanallardan yazın — {SALON.hours}
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {LINKS.map((item, index) => (
            <Reveal key={item.name} delay={index * 70}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="relative block card card-hover p-6 h-full"
            >
              {'badge' in item && item.badge && (
                <span className="absolute top-4 right-4 text-[10px] tracking-wide uppercase bg-[#25D366]/12 text-[#128C7E] px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm ${item.tone}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl text-mist-900 mb-1">{item.name}</h3>
              <p className="text-sm text-soft-600 mb-3">{item.handle}</p>
              <p className="text-xs text-mist-500 leading-relaxed">{item.text}</p>
            </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
        <div className="rounded-[1.35rem] bg-[#25D366] text-white p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-card">
          <div>
            <h3 className="font-display text-2xl md:text-3xl mb-2">Hemen yazın</h3>
            <p className="text-white/90 text-sm md:text-base">
              Masaj seçimi, saat ve konum için tek mesaj yeterli.
            </p>
          </div>
          <a
            href={SOCIAL.whatsapp()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#128C7E] px-6 py-3 text-sm font-semibold hover:bg-mist-50 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp’ta sohbet başlat
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
