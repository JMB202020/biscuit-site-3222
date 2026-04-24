import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/3222',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
