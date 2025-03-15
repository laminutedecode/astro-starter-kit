// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE } from "./src/config";
import sanity from '@sanity/astro';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    sitemap(),
    react(),
    sanity({
      projectId: '<YOUR-PROJECT-ID>',
      dataset: '<YOUR-DATASET-NAME>',
      useCdn: false,
    })
  ],
  output: 'server',
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  },

});