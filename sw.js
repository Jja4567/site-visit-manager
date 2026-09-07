const CACHE_NAME = "site-visit-v1";
const ASSETS = ["/", "/index.html", "/manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(names => 
    Promise.all(names.map(n => n !== CACHE_NAME && caches.delete(n)))
  ));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (!res || res.status !== 200) return res;
      const cache = caches.open(CACHE_NAME);
      cache.then(c => c.put(e.request, res.clone()));
      return res;
    }))
  );
});