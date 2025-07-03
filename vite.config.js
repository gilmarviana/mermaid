import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
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
            src: 'https://c6f442293fa73eb40b2178fa58fd3742.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1720976231275x392427182868092300/logo.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'any maskable'
          },
          {
            src: 'https://c6f442293fa73eb40b2178fa58fd3742.cdn.bubble.io/cdn-cgi/image/w=512,h=512,f=auto,dpr=1,fit=contain/f1720976231275x392427182868092300/logo.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
