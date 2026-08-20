import { IMAGES } from '@/data';
import Reveal from '@/components/Reveal';

const GALLERY = [
  { src: IMAGES.gallery1, alt: 'Masaj odası' },
  { src: IMAGES.gallery2, alt: 'Mum ışığı' },
  { src: IMAGES.gallery3, alt: 'Aromaterapi' },
  { src: IMAGES.gallery5, alt: 'Sıcak taş' },
  { src: IMAGES.gallery7, alt: 'Masaj seansı' },
  { src: IMAGES.gallery8, alt: 'Ayak masajı' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-white">
      <div className="page-shell">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title mb-3">Salonumuzdan Kareler</h2>
            <p className="section-lead">Sıcak atmosferimizi ve odalarımızı yakından görün</p>
            <div className="gold-rule mt-6" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {GALLERY.map((item, index) => (
            <Reveal key={item.alt} delay={index * 50}>
              <figure className="media-frame aspect-square group">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
