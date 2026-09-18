import { IMAGES } from '@/data';
import Reveal from '@/components/Reveal';

const GALLERY = [
  { src: IMAGES.gallery1, alt: 'Laswegas Spa Kayseri Kocasınan masaj odası' },
  { src: IMAGES.gallery2, alt: 'Laswegas Spa Erkilet salon içi' },
  { src: IMAGES.gallery3, alt: 'Kayseri masaj salonu tedavi alanı Laswegas' },
  { src: IMAGES.gallery5, alt: 'Laswegas Spa Merkezi Kocasınan atmosfer' },
  { src: IMAGES.gallery6, alt: 'Kayseri spa salonu Laswegas detay' },
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
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
