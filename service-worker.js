const cacheName = 'cache-v1'

const precacheResources = [
    '/',
    '/index.html',
    '/manifest.json',
    '/assets/images/logo.png',
    '/assets/images/banner.png',
    '/assets/images/icon48.png',
    '/assets/images/icon72.png',
    '/assets/images/icon96.png',
    '/assets/images/icon144.png',
    '/assets/images/icon168.png',
    '/assets/images/icon192.png',
]

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)))
});

self.addEventListener('activate', (event) => {
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse
            }
            return fetch(event.request)
        }),
    )
})