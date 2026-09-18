import { useEffect } from 'react';
import { SITE_URL } from '@/data';
import type { SeoPage } from '@/seo';

function upsertMeta(selector: string, attr: string, key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function Seo({ page }: { page: SeoPage }) {
  useEffect(() => {
    const url = `${SITE_URL}${page.path === '/' ? '/' : page.path}`;
    document.title = page.title;
    upsertMeta('meta[name="description"]', 'name', 'description', page.description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', url);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', page.title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', page.description);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', page.image);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', page.title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', page.description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', page.image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let alt = document.head.querySelector<HTMLLinkElement>('link[rel="alternate"][hreflang="tr"]');
    if (!alt) {
      alt = document.createElement('link');
      alt.rel = 'alternate';
      alt.hreflang = 'tr';
      document.head.appendChild(alt);
    }
    alt.href = url;

    let script = document.getElementById('jsonld');
    if (!script) {
      script = document.createElement('script');
      script.id = 'jsonld';
      (script as HTMLScriptElement).type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(page.jsonLd);
  }, [page]);

  return null;
}
