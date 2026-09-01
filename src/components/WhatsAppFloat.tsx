import { SOCIAL } from '@/data';
import { WhatsAppIcon } from '@/components/BrandIcons';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 left-5 z-[60]">
      <a
        href={SOCIAL.whatsapp()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile yazın"
        className="flex items-center gap-2 rounded-md bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:scale-[1.03] transition-all"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
