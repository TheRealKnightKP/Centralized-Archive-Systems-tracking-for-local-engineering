/* CASTLE service worker — basic offline shell. Data always fetched fresh (no-store). */
const CACHE = 'castle-v2.1';
const SHELL = ['./', './index.html', './manifest.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Always fetch data JSON fresh so repo updates show on load; fall back to cache offline.
  if (url.pathname.includes('/data/')) {
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
    return;
  }
  // Shell: cache-first.
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
/*
Update log:
V1: The first version. Sat, Aug 15
V1.1: Supabase DB entries, timeline horizontal, added edit, add, delete, to entries, and added placeholder for IFO Sat, Aug 15
V1.2: Fixing update errors
V1.3: Fixing update errors 2 electric bogaloo Sat, Aug 15
V2: UI rework Sun, Aug 16
V2.1: Fixed UI bugs, added Pauldron loading screen and transitions
