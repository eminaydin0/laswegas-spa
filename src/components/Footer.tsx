import { Link } from 'react-router-dom';
import { MapPinned, Phone } from 'lucide-react';
import { IMAGES, LOCATION, SALON, SOCIAL } from '@/data';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '@/components/BrandIcons';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#fafafa]">
      <div className="section-pad">
        <div className="page-shell">
          <div className="section-head">
            <h2 className="section-title mb-3">İletişim Bilgilerimiz</h2>
            <p className="section-lead">
              Kocasınan / Erkilet’teyiz. Konumu haritadan açın.
            </p>
            <div className="gold-rule mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-10">
            <div className="card-gold bg-white p-6 text-center min-h-[140px] flex flex-col justify-center">
              <h3 className="text-xs tracking-[0.2em] uppercase text-soft-600 font-semibold mb-3">Adres</h3>
              <p className="text-mist-800 font-medium leading-relaxed text-sm md:text-base">{SALON.address}</p>
            </div>
            <div className="card-gold bg-white p-6 text-center min-h-[140px] flex flex-col justify-center">
              <h3 className="text-xs tracking-[0.2em] uppercase text-soft-600 font-semibold mb-3">Telefon</h3>
              <a href={`tel:${SALON.phoneTel}`} className="font-display text-2xl text-soft-600 hover:text-soft-500">
                {SALON.phone}
              </a>
              <p className="text-sm text-mist-500 mt-2">{SALON.hours}</p>
            </div>
            <div className="card-gold bg-white p-6 text-center min-h-[140px] flex flex-col justify-center">
              <h3 className="text-xs tracking-[0.2em] uppercase text-soft-600 font-semibold mb-3">WhatsApp</h3>
              <a
                href={SOCIAL.whatsapp()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold text-soft-600 hover:text-soft-500"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp için tıklayın
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 md:gap-6 items-stretch">
            <div className="card p-6 md:p-8 flex flex-col justify-between border-t-4 border-t-soft-500 min-h-[320px]">
              <div>
                <h3 className="font-display text-xl text-mist-800 mb-2">Açık adres</h3>
                <p className="text-mist-700 leading-relaxed">{SALON.address}</p>
                <p className="text-sm text-mist-500 mt-2">{SALON.landmark}</p>
                <p className="text-sm text-mist-600 mt-4">{SALON.hours}</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-8">
                <a href={LOCATION.mapLink} target="_blank" rel="noreferrer" className="btn-primary">
                  <MapPinned className="w-4 h-4" />
                  Google Maps’te aç
                </a>
              </div>
            </div>

            <div className="media-frame min-h-[320px] h-full">
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
      </div>

      <div className="bg-soft-500 text-white">
        <div className="page-shell py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div>
            <Link to="/" className="inline-flex items-center mb-5">
              <img
                src={IMAGES.logo}
                alt="Laswegas Spa"
                className="h-24 md:h-28 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/85 mb-5">
              Rahatlamanın ve yenilenmenin adresi — {SALON.city}
            </p>
            <div className="flex gap-2">
              <a
                href={SOCIAL.whatsapp()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-md bg-white/15 text-white flex items-center justify-center hover:bg-white/25"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-md bg-white/15 text-white flex items-center justify-center hover:bg-white/25"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-md bg-white/15 text-white flex items-center justify-center hover:bg-white/25"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.16em] uppercase text-white/70 mb-4">Menü</h4>
            <ul className="space-y-2.5 text-sm text-white/90">
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
            <h4 className="text-xs tracking-[0.16em] uppercase text-white/70 mb-4">Adres</h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>{SALON.address}</li>
              <li>
                <a href={`tel:${SALON.phoneTel}`} className="hover:text-white font-semibold">
                  {SALON.phone}
                </a>
              </li>
              <li>{SALON.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.16em] uppercase text-white/70 mb-4">Hızlı iletişim</h4>
            <div className="flex flex-col gap-3 items-start">
              <a
                href={`tel:${SALON.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-md bg-white text-soft-700 px-5 py-3 text-sm font-semibold hover:bg-soft-50"
              >
                <Phone className="w-4 h-4" />
                Hemen Ara
              </a>
              <a
                href={SOCIAL.whatsapp()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#25D366] text-white px-5 py-3 text-sm font-semibold hover:bg-[#1ebe57]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="page-shell py-4 text-xs text-white/75 flex flex-col sm:flex-row justify-between gap-2 text-center sm:text-left">
            <span>{SALON.name} ve Spa © Copyright 2026 Tüm Hakları Saklıdır</span>
            <span>{SALON.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
