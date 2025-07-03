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
          },
          {
            src: '/icons/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
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
        ],
        edge_side_panel: {
          preferred_width: 400
        },
        file_handlers: [
          {
            action: '/',
            accept: {
              'application/pdf': ['.pdf'],
              'image/png': ['.png'],
              'image/jpeg': ['.jpg', '.jpeg']
            }
          }
        ],
        handle_links: {
          urls: [
            'https://gmvianainformatica.com.br/*',
            'https://portfoliocv-27173.bubbleapps.io/*'
          ]
        },
        protocol_handlers: [
          {
            protocol: 'web+gmvportfolio',
            url: 'https://gmvianainformatica.com.br/?url=%s'
          }
        ],
        share_target: {
          action: '/share-target',
          method: 'POST',
          enctype: 'multipart/form-data',
          params: {
            title: 'title',
            text: 'text',
            url: 'url',
            files: [
              {
                name: 'file',
                accept: ['image/*']
              }
            ]
          }
        },
        dir: "ltr",
        categories: ["portfolio", "productivity", "business"],
        shortcuts: [
          {
            name: "Ver Portfólio",
            short_name: "Portfólio",
            description: "Acesse o portfólio completo",
            url: "https://portfoliocv-27173.bubbleapps.io/",
            icons: [{ src: "/icons/logo-192x192.png", sizes: "192x192", type: "image/png" }]
          },
          {
            name: "Contato",
            short_name: "Contato",
            description: "Fale comigo",
            url: "mailto:gilmar@email.com",
            icons: [{ src: "/icons/logo-192x192.png", sizes: "192x192", type: "image/png" }]
          }
        ],
        iarc_rating_id: "e1a2b3c4d5e6f7g8h9i0",
        prefer_related_applications: false,
        related_applications: [
          {
            platform: "play",
            url: "https://play.google.com/store/apps/details?id=com.seuapp",
            id: "com.seuapp"
          },
          {
            platform: "itunes",
            url: "https://apps.apple.com/app/id123456789",
            id: "id123456789"
          }
        ],
        scope_extensions: [
          { origin: "https://gmvianainformatica.com.br" },
          { origin: "https://portfoliocv-27173.bubbleapps.io" }
        ]
      }
    })
  ],
})
