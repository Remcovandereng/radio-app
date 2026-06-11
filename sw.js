const CACHE_NAME = "nederland-fm-mini-v3";
const FILES = [
  "./?v=3",
  "index.html",
  "style.css?v=3",
  "app.js?v=3",
  "stations.js?v=3",
  "manifest.json?v=3",
  "icons/icon-192.png?v=3",
  "icons/icon-512.png?v=3",
  "icons/apple-touch-icon.png?v=3"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
