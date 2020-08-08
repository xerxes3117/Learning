var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    });
}

window.addEventListener('beforeinstallprompt', function (event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

setTimeout(function () {
  console.log('This is executed once the timer is done!');
}, 3000);

console.log('This is executed right after setTimeout()');

fetch("https://httpbin.org/ip")
  .then(function (response) {
    console.log("HTTPbin response: ", response);
    return response.json()
  })
  .then(data => console.log(data));