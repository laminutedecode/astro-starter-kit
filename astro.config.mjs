// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    react(),
    sanity({
      projectId: '<YOUR-PROJECT-ID>',
      dataset: '<YOUR-DATASET-NAME>',
      studioBasePath: '/admin',
      useCdn: false,
      apiVersion: '2025-03-14'
    })
  ],
  output: 'server',
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  },

});