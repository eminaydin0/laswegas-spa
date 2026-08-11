import { Link } from 'react-router-dom';
import { Clock3, MapPinned } from 'lucide-react';
import { LOCATION, SALON, SOCIAL, whatsappLink } from '@/data';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '@/components/BrandIcons';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white/50">
      <div className="w-full px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="section-label mb-3">İletişim</p>
          <h2 className="font-display text-3xl md:text-5xl text-mist-900 leading-tight mb-4">
            Adres & ulaşım
          </h2>
          <p className="text-mist-600 leading-relaxed">
            Melikgazi merkezde, Hastane Caddesi üzerindeyiz. Konumu haritadan açabilir,
            WhatsApp’tan pin isteyebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          <div className="card p-6 md:p-8 space-y-5">
            <div>
              <h3 className="font-display text-xl text-mist-900 mb-1">Açık adres</h3>
              <p className="text-mist-700 leading-relaxed">{SALON.address}</p>
              <p className="text-sm text-mist-500 mt-2">{SALON.landmark}</p>
            </div>

            <div className="flex gap-3 text-sm text-mist-700">
              <Clock3 className="w-4 h-4 text-soft-600 mt-0.5 shrink-0" />
              <div>
                <div>{SALON.hours}</div>
                <div className="text-mist-500">Son randevu genelde 20:30</div>
              </div>
            </div>

            <div className="text-sm text-mist-700">
              <a href={`tel:${SALON.phoneTel}`} className="hover:text-soft-700 font-medium">
                {SALON.phone}
              </a>
              <span className="text-mist-400 mx-2">·</span>
              <a href={`mailto:${SALON.email}`} className="hover:text-soft-700">
                {SALON.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href={LOCATION.mapLink} target="_blank" rel="noreferrer" className="btn-primary">
                <MapPinned className="w-4 h-4" />
                Google Maps’te aç
              </a>
              <a
                href={whatsappLink('Merhaba, Laswegas Spa konumunu / pin’ini paylaşır mısınız?')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:bg-[#1ebe57]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Konum pin’i iste
              </a>
            </div>
          </div>

          <div className="card-media min-h-[320px]">
            <iframe
              title="Laswegas Spa Merkezi konum"
              src={LOCATION.mapEmbed}
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="bg-mist-900 text-mist-300">
        <div className="w-full px-5 md:px-8 lg:px-12 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="font-display text-2xl text-white">Laswegas</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-soft-300 mt-1">Spa Merkezi</div>
            </Link>
            <p className="text-sm leading-relaxed text-mist-400 mb-5">
              Kayseri Melikgazi’de soft, temiz bir spa deneyimi.
            </p>
            <div className="flex gap-2">
              <a
                href={SOCIAL.whatsapp()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1ebe57]"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#166fe5]"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.16em] uppercase text-soft-300 mb-4">Menü</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/#about', 'Hakkımızda'],
                ['/#services', 'Masajlar'],
                ['/#gallery', 'Galeri'],
                ['/#contact', 'İletişim'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.16em] uppercase text-soft-300 mb-4">Adres</h4>
            <ul className="space-y-2.5 text-sm text-mist-400">
              <li>{SALON.address}</li>
              <li>
                <a href={`tel:${SALON.phoneTel}`} className="hover:text-white">
                  {SALON.phone}
                </a>
              </li>
              <li>{SALON.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.16em] uppercase text-soft-300 mb-4">Hızlı iletişim</h4>
            <a
              href={SOCIAL.whatsapp()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] text-white px-5 py-3 text-sm font-medium hover:bg-[#1ebe57] mb-3"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <p className="text-xs text-mist-500 leading-relaxed">
              Randevu, konum pin’i ve masaj seçimi için yazmanız yeterli.
            </p>
          </div>
        </div>

        <div className="border-t border-mist-800">
          <div className="w-full px-5 md:px-8 lg:px-12 py-4 text-xs text-mist-500 flex flex-col sm:flex-row justify-between gap-2">
            <span>{SALON.name} © 2026</span>
            <span>{SALON.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
