// const CACHE_NAME = 'app-cache-v4'; // Уникальное имя кэша
// const urlsToCache = ['/', '/index.html'];
//
// // Установка Service Worker
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME).then((cache) => {
//             console.log('[Service Worker] Caching resources');
//             return cache.addAll(urlsToCache);
//         })
//     );
// });
//
// // Активация Service Worker и удаление старых кэшей
// self.addEventListener('activate', (event) => {
//     event.waitUntil(
//         caches.keys().then((cacheNames) => {
//             return Promise.all(
//                 cacheNames.map((cache) => {
//                     if (cache !== CACHE_NAME) {
//                         console.log('[Service Worker] Clearing old cache:', cache);
//                         return caches.delete(cache);
//                     }
//                 })
//             );
//         }).then(() => self.clients.claim())
//     );
//     console.log('[Service Worker] Activated and ready to control all clients.');
// });
//
//
// // Обработка запросов
// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request).then((cachedResponse) => {
//             return (
//                 cachedResponse ||
//                 fetch(event.request).then((networkResponse) => {
//                     return caches.open(CACHE_NAME).then((cache) => {
//                         cache.put(event.request, networkResponse.clone());
//                         return networkResponse;
//                     });
//                 })
//             );
//         })
//     );
// });
