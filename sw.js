/* Bhalleffort — service worker: guarda toda la app para que funcione sin internet.
   NO edites VERSION ni ASSETS a mano: corre `node tools/build.js` y se actualizan solos
   (VERSION cambia cuando cambia cualquier archivo, así los dispositivos se actualizan). */
const VERSION = '2026-11-06-e98a3004eb';
const CACHE = 'bhalleffort-' + VERSION;
/* ASSETS:begin */
const ASSETS = [
  './',
  'css/styles.css',
  'data/exam-b2.js',
  'data/exam-c1.js',
  'data/exams.js',
  'data/general-a1.js',
  'data/general-a2.js',
  'data/general-b1.js',
  'data/general-b1b.js',
  'data/general-b2a.js',
  'data/general-b2b.js',
  'data/general-c1a.js',
  'data/general-c1b.js',
  'data/helpers.js',
  'data/listen-a1.js',
  'data/listen-a2.js',
  'data/listen-b1.js',
  'data/path.js',
  'data/placement.js',
  'data/pron.js',
  'data/sims.js',
  'data/tech-b1.js',
  'data/tech-b2.js',
  'data/tech-c1.js',
  'data/tech.js',
  'data/travel.js',
  'data/work-b2.js',
  'data/work-c1.js',
  'data/work.js',
  'fonts/atkinson-hyperlegible-latin-400-normal.woff2',
  'fonts/atkinson-hyperlegible-latin-700-normal.woff2',
  'fonts/barlow-condensed-latin-600-normal.woff2',
  'fonts/barlow-condensed-latin-700-normal.woff2',
  'icons/apple-touch-icon.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'index.html',
  'js/audio.js',
  'js/boot.js',
  'js/core.js',
  'js/exams.js',
  'js/main.js',
  'js/pages.js',
  'js/quiz.js',
  'js/runner.js',
  'js/session.js',
  'js/sims.js',
  'js/ui.js',
  'manifest.webmanifest'
];
/* ASSETS:end */

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('bhalleffort-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => (req.mode === 'navigate' ? caches.match('index.html') : Response.error()));
    })
  );
});
