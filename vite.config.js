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
        id: "/",
        name: 'Portfolio Gilmar Martinez Viana',
        short_name: 'Gilmar Martinez',
        description: 'Portfolio Desenvolvedor Low Code - Bubble, FlutterFlow, WordPress, React',
        theme_color: '#00aed1',
        background_color: '#00aed1',
        display: 'standalone',
        display_override: ["window-controls-overlay", "standalone"],
        orientation: 'portrait-primary',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/icons/logo.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'any'
          },
          {
            src: '/icons/logo.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'maskable'
          },
          {
            src: '/icons/logo.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any'
          },
          {
            src: '/icons/logo.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'maskable'
          }
        ],
        launch_handler: {
          client_mode: "auto"
        },
        screenshots: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
})
