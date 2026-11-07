/* A small navigation fallback, not an offline copy of the entire portfolio. */
'use strict';
const RECOVERY_CACHE = 'an-recovery-v4';
const RECOVERY_PREFIX = 'an-recovery-';
const OFFLINE_URL = '/offline.html';
const RECOVERY_ASSETS = [OFFLINE_URL, '/assets/css/error-ux.css', '/assets/js/error-ux.js', '/assets/images/kanade-404.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(RECOVERY_CACHE).then(cache => cache.addAll(RECOVERY_ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith(RECOVERY_PREFIX) && key !== RECOVERY_CACHE).map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (RECOVERY_ASSETS.includes(url.pathname) && !url.search) {
    event.respondWith(caches.open(RECOVERY_CACHE).then(async cache => {
      const cached = await cache.match(url.pathname);
      return cached || fetch(request);
    }));
    return;
  }

  // Leave API responses, subresources, cross-origin frames, and real 404s alone.
  if (request.mode !== 'navigate' || (request.destination && request.destination !== 'document')) return;
  event.respondWith((async () => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(request, { signal: controller.signal });
      if (response.status < 500) return response;
      const cached = await caches.open(RECOVERY_CACHE).then(cache => cache.match(OFFLINE_URL));
      if (!cached) return response;
      return new Response(await cached.text(), {
        status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }
      });
    } catch (error) {
      const cached = await caches.open(RECOVERY_CACHE).then(cache => cache.match(OFFLINE_URL));
      if (cached) return new Response(await cached.text(), {
        status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }
      });
      return Response.error();
    } finally {
      clearTimeout(timer);
    }
  })());
});
