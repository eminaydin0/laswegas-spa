import { Phone } from 'lucide-react';
import { SALON, SOCIAL } from '@/data';
import { WhatsAppIcon } from '@/components/BrandIcons';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 left-5 z-[60] flex flex-col gap-2">
      <a
        href={`tel:${SALON.phoneTel}`}
        aria-label="Hemen ara"
        className="flex items-center gap-2 rounded-md bg-soft-500 text-white pl-4 pr-5 py-3 shadow-[0_8px_24px_rgba(205,155,29,0.4)] hover:bg-soft-600 hover:scale-[1.03] transition-all"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">Hemen Ara</span>
      </a>
      <a
        href={SOCIAL.whatsapp()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile yazın"
        className="flex items-center gap-2 rounded-md bg-[#00ADB5] text-white pl-4 pr-5 py-3 shadow-[0_8px_24px_rgba(0,173,181,0.35)] hover:bg-[#009aa1] hover:scale-[1.03] transition-all"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
