import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}']
      },
      manifest: {
        name: 'Portfolio Gilmar Martinez Viana',
        short_name: 'Gilmar Martinez',
        description: 'Portfolio Desenvolvedor Low Code - Bubble, FlutterFlow, WordPress, React',
        theme_color: '#00aed1',
        background_color: '#00aed1',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/icons/logo.jpg',
            sizes: '256x256',
            type: 'image/jpeg',
            purpose: 'any maskable'
          },
          {
            src: '/icons/logo.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
