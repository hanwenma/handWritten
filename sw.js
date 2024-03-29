// 监听 install 事件
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("my-cache").then(function (cache) {
      return cache.addAll(["./index.html"]);
    })
  );
});

// 拦截所有请求事件
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      // 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据
      if (response) {
        return response;
      }
      console.log("fetch source");
    })
  );
});
