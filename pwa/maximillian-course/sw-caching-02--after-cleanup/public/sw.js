var CACHE_STATIC = 'static-v4'
var CACHE_DYNAMIC = 'dynamic-v2'

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);

  //Adding static resources to cache
  //waitUntil is used to wait for async caches.open to finish
  event.waitUntil(
    //caches.open('static') - if a cache named 'static' exists open it else create one and open it                             
    caches.open(CACHE_STATIC)
    .then(function (cache) {
      console.log('[Service Worker] Precaching App Shell')
      //add or addAll sends a request to the provided url and saves request-response key value pairs in the cache
      cache.addAll([
        '/',
        '/index.html',
        '/src/js/app.js',
        '/src/js/feed.js',
        '/src/js/promise.js',
        '/src/js/fetch.js',
        '/src/js/material.min.js',
        '/src/css/app.css',
        '/src/css/feed.css',
        '/src/images/main-image.jpg',
        'https://fonts.googleapis.com/css?family=Roboto:400,700',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
      ])
    })
  )
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    //caches.keys return array of keys(cache names)
    caches.keys()
      .then(function(keyList){
        return Promise.all(
          //map array of keys to array of promises
          keyList.map(function(key){
            if(key !== CACHE_STATIC && key !== CACHE_DYNAMIC){
              console.log('[Service Worker] Removing old cache', key)
              //caches.delete return a promise
              return caches.delete(key);
            }
          })
        );
      })
  )
  //return self.clients.claim();
});

//Intercepting the fetch requests and adding custom code for loading or adding files from/to cache
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      //if the requested file is found in cache load it from there
      if (response) {
        console.log('[Service Worker] Found in cache, resource: ' + event.request.url)
        return response;
      //else fetch the resource from network, add it to dynamic cache and load it
      } else {
        console.log('[Service Worker] Not Found in cache, resource: ' + event.request.url)
        return fetch(event.request)
          .then(function(res){
            caches.open(CACHE_DYNAMIC)
              .then(function(cache){
                //unlike add/addAll put doesn't send any network request. we need to provide it with request and response which it will save as key-value pair in cache
                cache.put(event.request.url, res.clone())
                return res;
              })
          })
          .catch(function(err){})
      }
    })
  );
});