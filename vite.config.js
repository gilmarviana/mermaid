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
        name: 'Portfolio Gilmar Martinez Viana',
        short_name: 'Gilmar Martinez',
        description: 'Portfolio Desenvolvedor Low Code - Bubble, FlutterFlow, WordPress, React',
        theme_color: '#00aed1',
        background_color: '#00aed1',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        icons: [
          {
            src: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fc6f442293fa73eb40b2178fa58fd3742.cdn.bubble.io%2Ff1720976231275x392427182868092300%2Flogo.jpg?w=72&h=72&auto=compress&dpr=1&fit=max',
            sizes: '72x72',
            type: 'image/jpeg'
          },
          {
            src: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fc6f442293fa73eb40b2178fa58fd3742.cdn.bubble.io%2Ff1720976231275x392427182868092300%2Flogo.jpg?w=96&h=96&auto=compress&dpr=1&fit=max',
            sizes: '96x96',
            type: 'image/jpeg'
          },
          {
            src: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fc6f442293fa73eb40b2178fa58fd3742.cdn.bubble.io%2Ff1720976231275x392427182868092300%2Flogo.jpg?w=128&h=128&auto=compress&dpr=1&fit=max',
            sizes: '128x128',
            type: 'image/jpeg'
          },
          {
            src: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fc6f442293fa73eb40b2178fa58fd3742.cdn.bubble.io%2Ff1720976231275x392427182868092300%2Flogo.jpg?w=144&h=144&auto=compress&dpr=1&fit=max',
            sizes: '144x144',
            type: 'image/jpeg'
          },
          {
            src: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fc6f442293fa73eb40b2178fa58fd3742.cdn.bubble.io%2Ff1720976231275x392427182868092300%2Flogo.jpg?w=152&h=152&auto=compress&dpr=1&fit=max',
            sizes: '152x152',
            type: 'image/jpeg'
          },
          {
            src: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fc6f442293fa73eb40b2178fa58fd3742.cdn.bubble.io%2Ff1720976231275x392427182868092300%2Flogo.jpg?w=192&h=192&auto=compress&dpr=1&fit=max',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fc6f442293fa73eb40b2178fa58fd3742.cdn.bubble.io%2Ff1720976231275x392427182868092300%2Flogo.jpg?w=384&h=384&auto=compress&dpr=1&fit=max',
            sizes: '384x384',
            type: 'image/jpeg'
          },
          {
            src: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fc6f442293fa73eb40b2178fa58fd3742.cdn.bubble.io%2Ff1720976231275x392427182868092300%2Flogo.jpg?w=512&h=512&auto=compress&dpr=1&fit=max',
            sizes: '512x512',
            type: 'image/jpeg'
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
