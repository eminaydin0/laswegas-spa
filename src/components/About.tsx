import { HeartHandshake, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { IMAGES, SALON, SOCIAL } from '@/data';
import Reveal from '@/components/Reveal';

const HIGHLIGHTS = [
  {
    title: 'Kişiye özel plan',
    text: 'Boyun, bel, stres veya özel gün — seansı size göre ayarlıyoruz.',
    icon: Sparkles,
  },
  {
    title: 'Hijyen ve mahremiyet',
    text: 'Temiz tekstil, kapalı odalar ve her seans sonrası temizlik.',
    icon: ShieldCheck,
  },
  {
    title: 'Deneyimli ekip',
    text: 'Klasik, medikal, mix, soft, aroma, Sultan ve Bali uygulamaları.',
    icon: HeartHandshake,
  },
  {
    title: 'Kolay iletişim',
    text: 'WhatsApp veya telefondan yazın; saati birlikte netleştiriyoruz.',
    icon: MessageCircle,
  },
];

export default function About() {
  return (
    <section id="about" className="pt-10 pb-16 md:pt-14 md:pb-20 bg-white">
      <div className="page-shell">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
            <h2 className="section-title-dark mb-1.5 text-balance">
              Masaj ve Spa Salonu
            </h2>
            <p className="text-mist-600 text-sm md:text-base mb-0.5">{SALON.subtitle}</p>
            <p className="font-display text-lg md:text-xl text-soft-500">{SALON.name}</p>
            <div className="gold-rule mt-4" />
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
                  Laswegas, bedenin yavaşladığı ve zihnin sessizleştiği bir mola için var. Kapıdan
                  girdiğiniz andan itibaren loş ışık, sakin müzik ve özel odalarla günün temposunu
                  geride bırakmanızı istiyoruz.
                </p>
                <p>
                  Klasik, medikal, mix, soft, aroma terapi, Sultan ve Bali masajlarını kişiye özel
                  planlıyoruz. Hijyen ve mahremiyet bizim için standart; her seans sizin ritminize
                  göre şekillenir.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white p-3.5 ring-1 ring-soft-100/80 shadow-[0_6px_20px_rgba(50,52,80,0.04)]"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-soft-500 shrink-0" strokeWidth={1.7} />
                        <h3 className="font-display text-[15px] text-mist-800 leading-tight">{item.title}</h3>
                      </div>
                      <p className="text-xs text-mist-500 leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
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
