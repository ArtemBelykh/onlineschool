const CACHE_NAME = 'app-cache-v4'; // Уникальное имя кэша
const urlsToCache = ['/', '/index.html']; // Кэшируем главную страницу и базовый ресурс

// Устанавливаем Service Worker и кэшируем ресурсы
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching resources');
            return cache.addAll(urlsToCache);
        })
    );
});

// Удаляем старые кэши при активации нового Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim(); // Автоматически активируем новый Service Worker
});

// Обработка запросов
self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        // Для запросов на страницы (например, React Router)
        event.respondWith(
            caches.match('/index.html').then((cachedResponse) => {
                return (
                    cachedResponse ||
                    fetch(event.request).catch(() => {
                        console.error('[Service Worker] Network request failed.');
                    })
                );
            })
        );
    } else {
        // Для остальных ресурсов
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return (
                    cachedResponse ||
                    fetch(event.request).then((networkResponse) => {
                        return caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    })
                );
            })
        );
    }
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
