import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { SALON, SERVICES, SOCIAL } from '@/data';
import { WhatsAppIcon, InstagramIcon } from '@/components/BrandIcons';

const NAV_LINKS = [
  { label: 'Anasayfa', href: '/#home' },
  { label: 'Hakkımızda', href: '/#about' },
  { label: 'Galeri', href: '/#gallery' },
  { label: 'Sosyal', href: '/#social' },
  { label: 'İletişim', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [masajOpen, setMasajOpen] = useState(false);
  const [mobileMasajOpen, setMobileMasajOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setMasajOpen(false);
    setMobileMasajOpen(false);
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  }, [location]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setMasajOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setMasajOpen(false);
    setMobileMasajOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(1);
      if (location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-nav border-b border-mist-200/80">
      <div className="w-full">
        <nav className="px-5 md:px-8 lg:px-12 h-[68px] md:h-[76px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-soft-100 flex items-center justify-center">
              <span className="font-display text-xl text-soft-700">L</span>
            </div>
            <div className="leading-none">
              <div className="font-display text-xl text-mist-900">Laswegas</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-soft-600 mt-1">Spa Merkezi</div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => go(link.href)}
                  className="px-3 py-2 text-sm text-mist-600 hover:text-soft-700 hover:bg-soft-50 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}

            <li className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMasajOpen((v) => !v)}
                className={`inline-flex items-center gap-1 px-3 py-2 text-sm rounded-xl transition-colors ${
                  masajOpen ? 'text-soft-700 bg-soft-50' : 'text-mist-600 hover:text-soft-700 hover:bg-soft-50'
                }`}
                aria-expanded={masajOpen}
              >
                Masajlar
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${masajOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-72 card overflow-hidden transition-all duration-300 origin-top ${
                  masajOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="py-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/hizmet/${service.id}`}
                      onClick={() => setMasajOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-soft-50 transition-colors"
                    >
                      <img
                        src={service.image}
                        alt=""
                        className="w-11 h-11 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-mist-900 truncate">{service.name}</div>
                        <div className="text-xs text-mist-500">{service.duration}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => go('/#services')}
                  className="w-full text-left px-4 py-3 text-sm text-soft-700 font-medium border-t border-mist-100 hover:bg-mist-50"
                >
                  Tüm masajları gör
                </button>
              </div>
            </li>

            {NAV_LINKS.slice(2).map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => go(link.href)}
                  className="px-3 py-2 text-sm text-mist-600 hover:text-soft-700 hover:bg-soft-50 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL.whatsapp()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#1ebe57] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${SALON.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-mist-100 text-mist-800 px-4 py-2.5 text-sm font-medium hover:bg-mist-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Ara
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href={SOCIAL.whatsapp()}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-xl bg-mist-100 flex items-center justify-center text-mist-800"
              aria-label="Menü"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden border-t border-mist-100 px-4 py-3 space-y-1 animate-menu-in">
            <button
              onClick={() => go('/#home')}
              className="block w-full text-left px-3 py-3 text-sm text-mist-700 rounded-xl hover:bg-mist-100"
            >
              Anasayfa
            </button>
            <button
              onClick={() => go('/#about')}
              className="block w-full text-left px-3 py-3 text-sm text-mist-700 rounded-xl hover:bg-mist-100"
            >
              Hakkımızda
            </button>

            <div>
              <button
                type="button"
                onClick={() => setMobileMasajOpen((v) => !v)}
                className="flex w-full items-center justify-between px-3 py-3 text-sm text-mist-700 rounded-xl hover:bg-mist-100"
              >
                Masajlar
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMasajOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileMasajOpen && (
                <div className="pl-2 pb-2 space-y-1 animate-menu-in">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/hizmet/${service.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-soft-50"
                    >
                      <img src={service.image} alt="" className="w-9 h-9 rounded-lg object-cover" />
                      <span className="text-sm text-mist-700">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.slice(2).map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="block w-full text-left px-3 py-3 text-sm text-mist-700 rounded-xl hover:bg-mist-100"
              >
                {link.label}
              </button>
            ))}
            <a href={SOCIAL.whatsapp()} target="_blank" rel="noreferrer" className="btn-primary w-full mt-2 bg-[#25D366] hover:bg-[#1ebe57]">
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
