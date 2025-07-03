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
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Evangelista Virtual',
        short_name: 'Evangelista',
        description: 'Evangelista Virtual - Sua bíblia online',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        icons: [
          {
            src: 'https://50c5f772afaf41b913fc34f59c79cf31.cdn.bubble.io/cdn-cgi/image/w=72,h=72,f=auto,dpr=1,fit=contain/f1746346933633x618199983378009900/ev-removebg-preview.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'https://50c5f772afaf41b913fc34f59c79cf31.cdn.bubble.io/cdn-cgi/image/w=96,h=96,f=auto,dpr=1,fit=contain/f1746346933633x618199983378009900/ev-removebg-preview.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'https://50c5f772afaf41b913fc34f59c79cf31.cdn.bubble.io/cdn-cgi/image/w=128,h=128,f=auto,dpr=1,fit=contain/f1746346933633x618199983378009900/ev-removebg-preview.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'https://50c5f772afaf41b913fc34f59c79cf31.cdn.bubble.io/cdn-cgi/image/w=144,h=144,f=auto,dpr=1,fit=contain/f1746346933633x618199983378009900/ev-removebg-preview.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'https://50c5f772afaf41b913fc34f59c79cf31.cdn.bubble.io/cdn-cgi/image/w=152,h=152,f=auto,dpr=1,fit=contain/f1746346933633x618199983378009900/ev-removebg-preview.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: 'https://50c5f772afaf41b913fc34f59c79cf31.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1746346933633x618199983378009900/ev-removebg-preview.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://50c5f772afaf41b913fc34f59c79cf31.cdn.bubble.io/cdn-cgi/image/w=384,h=384,f=auto,dpr=1,fit=contain/f1746346933633x618199983378009900/ev-removebg-preview.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'https://50c5f772afaf41b913fc34f59c79cf31.cdn.bubble.io/cdn-cgi/image/w=512,h=512,f=auto,dpr=1,fit=contain/f1746346933633x618199983378009900/ev-removebg-preview.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      strategies: 'injectManifest',
      injectManifest: {
        injectionPoint: undefined
      },
      filename: 'sw.js',
      srcDir: 'public'
    })
  ],
})
