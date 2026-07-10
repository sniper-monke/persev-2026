// Service Worker for Perseverantia - Performance & Offline Support
const CACHE_NAME = 'perseverantia-v8';
const RUNTIME_CACHE = 'perseverantia-runtime-v8';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/events.html',
  '/leaderboard.html',
  '/organizing-committee.html',
  '/static/mobile-optimized.css',
  '/static/styles.css',
  '/static/lbstyle.css',
  '/static/persev-navbar.css',
  '/assets/landing.png',
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {
        console.warn('Service Worker: Some assets failed to cache');
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - cache first strategy for static assets, network first for dynamic
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // Cache strategy for different resource types
  if (request.destination === 'style' || request.destination === 'script' || request.destination === 'font') {
    // Network first so bundled CSS/JS fixes do not stay stale after in-site navigation.
    event.respondWith(
      fetch(request).then((response) => {
        if (response && response.status === 200) {
          const clonedResponse = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, clonedResponse);
          });
        }
        return response;
      }).catch(() => {
        return caches.match(request);
      })
    );
  } else if (request.destination === 'document' || request.destination === '') {
    // Network first for HTML pages (always serve fresh) and same-origin navs
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clonedResponse = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, clonedResponse);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  } else if (request.method === 'GET' && request.destination === 'image') {
    // Network first, then cache for images
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clonedResponse = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, clonedResponse);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  }
});

// Background Sync for future use
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-analytics') {
    event.waitUntil(syncAnalytics());
  }
});

function syncAnalytics() {
  return Promise.resolve();
}
