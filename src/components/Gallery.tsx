import { IMAGES } from '@/data';
import Reveal from '@/components/Reveal';

const GALLERY = [
  { src: IMAGES.gallery1, alt: 'Masaj odası', tall: true },
  { src: IMAGES.gallery2, alt: 'Mum ışığı' },
  { src: IMAGES.gallery3, alt: 'Aromaterapi' },
  { src: IMAGES.gallery5, alt: 'Sıcak taş' },
  { src: IMAGES.gallery7, alt: 'Masaj seansı', tall: true },
  { src: IMAGES.gallery8, alt: 'Ayak masajı' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white/40">
      <div className="w-full px-5 md:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="section-label mb-3">Galeri</p>
            <h2 className="font-display text-3xl md:text-5xl text-mist-900 leading-tight">
              Atmosferi hissedin
            </h2>
          </div>
        </Reveal>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {GALLERY.map((item, index) => (
            <Reveal key={item.alt} delay={index * 60} className="break-inside-avoid mb-4">
              <figure className="card-media group">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ${
                    item.tall ? 'aspect-[3/4]' : 'aspect-square'
                  }`}
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
