self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);

  //Adding static resources to cache
  //waitUntil is used to wait for async caches.open to finish
  event.waitUntil(
    //static will name of cache storage created                                    
    caches.open('static')
    .then(function (cache) {
      console.log('[Service Worker] Precaching App Shell')
      cache.add('/src/js/app.js')
    })
  )
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
      }
    })
  );
});