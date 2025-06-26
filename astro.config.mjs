// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://arisen-dev.github.io',
  base: 'persoweb',
  vite: {
      plugins: [tailwindcss()]
	},

  integrations: [react()]
});