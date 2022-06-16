import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'icons/apple-touch-icon.png',
      ],
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,ttf,woff,woff2}'],
      },
      manifest: {
        name: 'Random Password Monster',
        short_name: 'Random Password Monster',
        description:
          'A free to use tool to help you create safe passwords for your accounts.',
        theme_color: '#321e55',
        background_color: '#321e55',
        icons: [
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/mstile-70x70.png',
            sizes: '70x70',
            type: 'image/png',
          },
          {
            src: 'icons/mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png',
          },
          {
            src: 'icons/mstile-310x150.png',
            sizes: '310x150',
            type: 'image/png',
          },
          {
            src: 'icons/mstile-310x310.png',
            sizes: '310x310',
            type: 'image/png',
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
