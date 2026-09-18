import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { applySeoToHtml, allSeoPages, sitemapXml } from './src/seo';

export function seoBuildPlugin(): Plugin {
  return {
    name: 'laswegas-seo-build',
    closeBundle() {
      const dist = path.resolve('dist');
      const indexPath = path.join(dist, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const html = fs.readFileSync(indexPath, 'utf8');
      const lastmod = new Date().toISOString().slice(0, 10);

      for (const page of allSeoPages()) {
        const outHtml = applySeoToHtml(html, page);
        if (page.path === '/') {
          fs.writeFileSync(indexPath, outHtml);
          continue;
        }
        const dir = path.join(dist, page.path.replace(/^\//, ''));
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), outHtml);
      }

      fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemapXml(lastmod));
      fs.writeFileSync(
        path.join(dist, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: https://laswegasspa.com.tr/sitemap.xml\n`,
      );
    },
  };
}
