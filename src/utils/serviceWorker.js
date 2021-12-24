const page = "xxv.network"
const assets = [
  "/",
  "/module",
  "/main.css",
  "/xxvlogo.png",
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
