const CACHE_NAME = 'evangelista-virtual-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/site.webmanifest',
  'https://bibliaonline-90421.bubbleapps.io/'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker instalado com sucesso');
        return self.skipWaiting();
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker ativando...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker ativado com sucesso');
      return self.clients.claim();
    })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  // Não interceptar requisições para o iframe externo
  if (event.request.url.includes('bubbleapps.io')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retorna o cache se encontrado
        if (response) {
          return response;
        }
        
        // Se não está em cache, faz a requisição
        return fetch(event.request).then((response) => {
          // Não cachear se não for uma resposta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clona a resposta para cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Fallback para páginas offline
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Mensagem para verificar se o SW está ativo
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
}); 