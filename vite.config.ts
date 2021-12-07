import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import fs from 'fs-extra';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // include all of assets from assets folder
      includeAssets: fs
        .readdirSync('./src/assets/')
        .map((fileName) => `src/assets/${fileName}`),
      manifest: {
        name: 'Contrasto',
        short_name: 'Contrasto',
        description: 'Another Color Contrast app to fill gaps :)',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    watch: {
      depth: 10,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
