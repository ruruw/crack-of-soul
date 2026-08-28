self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('tcos-store-v4').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/app_icon.png',
      '/manifest.json',
      '/splash.jpg'
    ])),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== 'tcos-store-v4') {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      // 1. Jalankan fetch ke server di background untuk mengambil update terbaru
      const fetchPromise = fetch(e.request).then((networkResponse) => {
        caches.open('tcos-store-v4').then((cache) => {
          cache.put(e.request, networkResponse.clone());
        });
        return networkResponse;
      }).catch(() => {});
      
      // 2. Langsung tampilkan versi cache agar loading instan (Stale-While-Revalidate)
      // Jika belum ada di cache (baru pertama buka), baru tunggu fetch selesai
      return cachedResponse || fetchPromise;
    })
  );
});
