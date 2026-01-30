self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});
self.addEventListener('fetch', (e) => {
  // This is required for PWA installation but can be empty for now
});