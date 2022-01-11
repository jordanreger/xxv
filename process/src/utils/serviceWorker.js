const page = "xxv.network"
const assets = [
  "/",
  "/manifest.webmanifest",
  "/xxvlogo.png",
  "/resource?url=https://cdn.esm.sh/v62/lit-element@3.1.1/es2021/lit-element.js",
  "/settings"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(page).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
