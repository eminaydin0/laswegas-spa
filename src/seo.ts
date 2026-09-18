import { FAQS, LOCATION, SALON, SERVICES, SITE_URL, SOCIAL, type Service } from './data';

export const OG_IMAGE = `${SITE_URL}/laswegas-share.jpg`;

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  image: string;
  jsonLd: unknown;
};

const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

export const homeTitle =
  'Kayseri Masaj Salonu | Laswegas Spa Merkezi Kocasınan Erkilet';
export const homeDescription =
  'Kayseri Kocasınan / Erkilet’te Laswegas Spa Merkezi: klasik, medikal, mix, soft, aroma terapi, Sultan ve Bali masajı. Her gün 12:00–00:00. Randevu: 0501 361 03 29.';

export function serviceTitle(service: Service) {
  return `${service.name} Kayseri | ${service.nameEn} — Laswegas Spa Kocasınan`;
}

export function serviceDescription(service: Service) {
  return `${service.name} (${service.duration}) Kayseri Kocasınan’da Laswegas Spa’da. ${service.description} Randevu: 0501 361 03 29.`;
}

export function businessJsonLd() {
  return {
    '@type': ['DaySpa', 'HealthAndBeautyBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: SALON.name,
    alternateName: ['Laswegas Spa', 'Laswegas Spa Kayseri', 'Laswegas Masaj Salonu'],
    description: homeDescription,
    url: `${SITE_URL}/`,
    image: [OG_IMAGE, abs('/images/logo.png')],
    logo: abs('/images/logo.png'),
    telephone: SALON.phoneTel,
    email: SALON.email,
    priceRange: '$$',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Cash, Credit Card',
    availableLanguage: ['Turkish'],
    knowsAbout: SERVICES.map((s) => s.name),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SALON.phoneTel,
      contactType: 'reservations',
      availableLanguage: 'Turkish',
      areaServed: 'TR',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '00:00',
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ertuğrul Osman Gazi Mah. 4381. Sokak No:5/D',
      addressLocality: 'Kocasınan',
      addressRegion: 'Kayseri',
      postalCode: '38110',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LOCATION.lat,
      longitude: LOCATION.lng,
    },
    hasMap: LOCATION.mapLink,
    areaServed: [
      { '@type': 'City', name: 'Kayseri' },
      { '@type': 'AdministrativeArea', name: 'Kocasınan' },
      { '@type': 'Place', name: 'Erkilet' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:00',
      closes: '00:00',
    },
    sameAs: [SOCIAL.instagram, SOCIAL.facebook],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Masaj ve spa hizmetleri',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          url: `${SITE_URL}/hizmet/${service.id}`,
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SALON.name,
    inLanguage: 'tr-TR',
    publisher: { '@id': `${SITE_URL}/#business` },
  };
}

export function faqJsonLd() {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessJsonLd(),
      websiteJsonLd(),
      faqJsonLd(),
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: homeTitle,
        description: homeDescription,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#business` },
        inLanguage: 'tr-TR',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: OG_IMAGE,
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#services`,
        name: 'Kayseri masaj çeşitleri',
        itemListElement: SERVICES.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.name,
          url: `${SITE_URL}/hizmet/${service.id}`,
        })),
      },
    ],
  };
}

export function serviceFaqs(service: Service) {
  return [
    {
      q: `${service.name} Kayseri’de ne kadar sürer?`,
      a: `Laswegas Spa Merkezi’nde ${service.name} seansı ${service.duration} sürer. Baskı: ${service.intensity}.`,
    },
    {
      q: `${service.name} kimlere uygun?`,
      a: `${service.bestFor.slice(0, 3).join('; ')}. Kayseri Kocasınan / Erkilet’teki salonumuzda randevuyla uygulanır.`,
    },
    {
      q: `${service.name} randevusu nasıl alınır?`,
      a: `WhatsApp veya ${SALON.phone} numarayı arayarak ${service.name} randevusu alabilirsiniz. Çalışma saatleri: ${SALON.hours}.`,
    },
  ];
}

export function serviceJsonLd(service: Service) {
  const url = `${SITE_URL}/hizmet/${service.id}`;
  const faqs = serviceFaqs(service);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessJsonLd(),
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: serviceTitle(service),
        description: serviceDescription(service),
        isPartOf: { '@id': `${SITE_URL}/#website` },
        inLanguage: 'tr-TR',
        primaryImageOfPage: { '@type': 'ImageObject', url: abs(service.image) },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Masajlar', item: `${SITE_URL}/#services` },
          { '@type': 'ListItem', position: 3, name: service.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.name,
        alternateName: service.nameEn,
        serviceType: service.name,
        description: service.longDescription,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: [
          { '@type': 'City', name: 'Kayseri' },
          { '@type': 'AdministrativeArea', name: 'Kocasınan' },
        ],
        url,
        image: abs(service.image),
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          url,
          areaServed: 'Kayseri',
        },
      },
    ],
  };
}

export function getHomeSeo(): SeoPage {
  return {
    path: '/',
    title: homeTitle,
    description: homeDescription,
    image: OG_IMAGE,
    jsonLd: homeJsonLd(),
  };
}

export function getServiceSeo(service: Service): SeoPage {
  return {
    path: `/hizmet/${service.id}`,
    title: serviceTitle(service),
    description: serviceDescription(service),
    image: abs(service.image),
    jsonLd: serviceJsonLd(service),
  };
}

export function allSeoPages(): SeoPage[] {
  return [getHomeSeo(), ...SERVICES.map(getServiceSeo)];
}

export function sitemapXml(lastmod: string) {
  const homeImages = [
    `${SITE_URL}/laswegas-share.jpg`,
    `${SITE_URL}/images/logo.png`,
    ...SERVICES.map((s) => abs(s.image)),
  ];
  const urls = allSeoPages()
    .map((page, i) => {
      const loc = `${SITE_URL}${page.path === '/' ? '/' : page.path}`;
      const images =
        i === 0
          ? homeImages
          : [page.image];
      const imageTags = images
        .map(
          (src) => `    <image:image>
      <image:loc>${src}</image:loc>
    </image:image>`,
        )
        .join('\n');
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${i === 0 ? 'weekly' : 'monthly'}</changefreq>
    <priority>${i === 0 ? '1.0' : '0.8'}</priority>
${imageTags}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

export function applySeoToHtml(html: string, page: SeoPage) {
  const url = `${SITE_URL}${page.path === '/' ? '/' : page.path}`;
  const json = JSON.stringify(page.jsonLd);
  let next = html;
  next = next.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`);
  next = replaceMeta(next, 'name', 'description', page.description);
  next = replaceMeta(next, 'property', 'og:url', url);
  next = replaceMeta(next, 'property', 'og:title', page.title);
  next = replaceMeta(next, 'property', 'og:description', page.description);
  next = replaceMeta(next, 'property', 'og:image', page.image);
  next = replaceMeta(next, 'property', 'og:image:secure_url', page.image);
  next = replaceMeta(next, 'name', 'twitter:title', page.title);
  next = replaceMeta(next, 'name', 'twitter:description', page.description);
  next = replaceMeta(next, 'name', 'twitter:image', page.image);
  next = replaceMeta(next, 'property', 'og:image:alt', page.title);
  next = replaceMeta(next, 'name', 'twitter:image:alt', page.title);
  if (next.includes('rel="alternate" hreflang="tr"')) {
    next = next.replace(
      /<link rel="alternate" hreflang="tr" href="[^"]*" \/>/,
      `<link rel="alternate" hreflang="tr" href="${url}" />`,
    );
  } else {
    next = next.replace('</title>', `</title>\n    <link rel="alternate" hreflang="tr" href="${url}" />`);
  }
  if (next.includes('rel="canonical"')) {
    next = next.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${url}" />`,
    );
  } else {
    next = next.replace('</title>', `</title>\n    <link rel="canonical" href="${url}" />`);
  }
  if (next.includes('id="jsonld"')) {
    next = next.replace(
      /<script type="application\/ld\+json" id="jsonld">[\s\S]*?<\/script>/,
      `<script type="application/ld+json" id="jsonld">${json}</script>`,
    );
  } else {
    next = next.replace('</head>', `    <script type="application/ld+json" id="jsonld">${json}</script>\n  </head>`);
  }
  return next;
}

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function replaceMeta(html: string, attr: 'name' | 'property', key: string, content: string) {
  const re = new RegExp(`<meta ${attr}="${key}" content="[^"]*" />`);
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function escapeAttr(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}
