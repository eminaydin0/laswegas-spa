import { SOCIAL, IMAGES } from '@/data';
import { InstagramIcon } from '@/components/BrandIcons';
import Reveal from '@/components/Reveal';

const FEED = [
  IMAGES.gallery1,
  IMAGES.gallery2,
  IMAGES.gallery3,
  IMAGES.gallery5,
  IMAGES.gallery6,
  IMAGES.gallery7,
  IMAGES.gallery8,
  IMAGES.aboutInterior,
  IMAGES.heroMassage,
];

export default function Social() {
  return (
    <section id="social" className="py-20 md:py-28 bg-white">
      <div className="w-full px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                  <div className="w-full h-full rounded-full bg-soft-500 flex items-center justify-center">
                    <span className="font-display text-2xl text-white">L</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-mist-800">@laswegasspa</h2>
                <p className="text-sm text-mist-500 mt-0.5">Instagram’dan kareler</p>
              </div>
            </div>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2 self-start sm:self-auto"
            >
              <InstagramIcon className="w-4 h-4" />
              Instagram’da takip et
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3">
          {FEED.map((src, index) => (
            <Reveal key={src} delay={index * 40}>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden bg-mist-100"
              >
                <img
                  src={src}
                  alt={`Laswegas Instagram ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-mist-950/0 group-hover:bg-mist-950/35 transition-colors flex items-center justify-center">
                  <InstagramIcon className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
