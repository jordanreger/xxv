const page = "xxv.network"
const assets = [
  "/",
  "/manifest.webmanifest",
  "/xxvlogo.png",
  "/resource?url=https://esm.sh/lit",
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
