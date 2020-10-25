self.addEventListener("install", (event) => {
    console.log("Installation started...", event);
})

self.addEventListener("activate", (event) => {
    console.log("Activation started....", event);
    return self.clients.claim();
})

self.addEventListener("fetch", (event) => {
    console.log("Fetching something...", event);
    event.respondWith(fetch(event.request));
})