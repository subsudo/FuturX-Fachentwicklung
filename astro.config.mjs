import { defineConfig } from 'astro/config';

// GitHub-Pages-Projektseite: https://subsudo.github.io/FuturX-Fachentwicklung/
// Bei eigener (Sub-)Domain wie radar.futurx.ch: 'base' entfernen und 'site' anpassen.
export default defineConfig({
  site: 'https://subsudo.github.io',
  base: '/FuturX-Fachentwicklung',
  trailingSlash: 'ignore',
});
