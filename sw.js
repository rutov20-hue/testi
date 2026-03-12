// Service Worker для кэширования и оффлайн работы
const CACHE_NAME = 'my-travel-diary-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/travel-1.html',
    '/travel-2.html',
    '/travel-3.html',
    '/travel-4.html',
    '/travel-5.html',
    '/travel-6.html',
    '/travel-7.html',
    '/css/main.css',
    '/css/components.css',
    '/css/responsive.css',
    '/css/about.css',
    '/js/language.js',
    '/js/complete-translations.js',
    '/js/theme-and-animations.js',
    '/js/map.js',
    '/js/gallery.js',
    '/js/reviews.js',
    '/images/logo.png',
    '/images/paris.jpg',
    '/images/switzerland.jpg',
    '/images/tokyo.jpg',
    '/images/greece.jpg',
    '/images/bali.jpg',
    '/images/newyork.jpg',
    '/images/iceland.jpg'
];

// Установка Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Обработка запросов
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Возвращаем кэшированную версию или загружаем из сети
                if (response) {
                    return response;
                }
                
                return fetch(event.request).then(
                    function(response) {
                        // Проверяем валидность ответа
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Клонируем ответ для кэширования
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

// Обновление кэша
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});