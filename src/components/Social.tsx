import { SOCIAL, IMAGES } from '@/data';
import { InstagramIcon } from '@/components/BrandIcons';
import Reveal from '@/components/Reveal';

const FEED = [
  IMAGES.gallery1,
  IMAGES.gallery2,
  IMAGES.gallery3,
  IMAGES.gallery5,
  IMAGES.gallery6,
];

export default function Social() {
  return (
    <section id="social" className="section-pad bg-white">
      <div className="page-shell">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title mb-3">Instagram</h2>
            <p className="section-lead">@laswegaspa — salonumuzdan kareler</p>
            <div className="gold-rule mt-6" />
          </div>
        </Reveal>

        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {FEED.map((src, index) => (
            <Reveal key={src} delay={index * 35}>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl md:rounded-2xl bg-mist-100 border border-soft-500/15"
              >
                <img
                  src={src}
                  alt={`Laswegas Instagram ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-mist-950/0 group-hover:bg-mist-950/35 transition-colors flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 md:w-7 md:h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <InstagramIcon className="w-4 h-4" />
            Instagram’da takip et
          </a>
        </div>
      </div>
    </section>
  );
}
