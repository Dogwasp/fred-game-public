'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "82509c02b363412d9a1cddce3644ae2b",
"assets/assets/assets/images/actionPoint.png": "bd6657f8c9ec574d839d374e9a190bcd",
"assets/assets/assets/images/axe0.png": "abdea81f6e3fd999580351479603a62a",
"assets/assets/assets/images/axe1.png": "ab16b9c14f2fa21b9b236f7bc24da27b",
"assets/assets/assets/images/bow0.png": "7cc4af732a696cc1eec694e7d088047f",
"assets/assets/assets/images/bow1.png": "1c1d2cf711688ecef04cdf624ca4e00a",
"assets/assets/assets/images/circle.png": "194562e150b06a33af9ed79824635b90",
"assets/assets/assets/images/circleOutline.png": "2f607d73928d36b4e000b5b5b91b6a89",
"assets/assets/assets/images/knight0.png": "87a4ad31a92d301e431eb9ce67fe2021",
"assets/assets/assets/images/knight1.png": "906a4e4e84aa3b2e0fdb0d8a57d5a675",
"assets/assets/assets/images/movement.png": "1d38fd6884d12fedd97a59e8dc8279a5",
"assets/assets/assets/images/movementPoint.png": "ab193d544401e4991fae0e27b838d373",
"assets/assets/assets/images/rangeOutline.png": "007c66bad8013b26171ecf4edc37b9e5",
"assets/assets/assets/images/spear0.png": "dbdbcd86fcfe1e684ba600f2ad55595e",
"assets/assets/assets/images/spear1.png": "28d66a10022e7f2c96babfbadb4bd66c",
"assets/assets/assets/images/sword0.png": "96c8f13e694c6afbbb647743d0d12622",
"assets/assets/assets/images/sword1.png": "811d2a0b994cd0081edea0c4efc67d12",
"assets/assets/cube/untitled.mtl": "3f84762ded3f83780c66efa9e62a0d5b",
"assets/assets/cube/untitled.obj": "4cd02f909e6983c1815b6475634ceb1c",
"assets/assets/images/actionPoint.png": "bd6657f8c9ec574d839d374e9a190bcd",
"assets/assets/images/axe0.png": "abdea81f6e3fd999580351479603a62a",
"assets/assets/images/axe1.png": "ab16b9c14f2fa21b9b236f7bc24da27b",
"assets/assets/images/bow0.png": "7cc4af732a696cc1eec694e7d088047f",
"assets/assets/images/bow1.png": "1c1d2cf711688ecef04cdf624ca4e00a",
"assets/assets/images/circle.png": "194562e150b06a33af9ed79824635b90",
"assets/assets/images/circleOutline.png": "2f607d73928d36b4e000b5b5b91b6a89",
"assets/assets/images/knight0.png": "87a4ad31a92d301e431eb9ce67fe2021",
"assets/assets/images/knight1.png": "906a4e4e84aa3b2e0fdb0d8a57d5a675",
"assets/assets/images/movement.png": "1d38fd6884d12fedd97a59e8dc8279a5",
"assets/assets/images/movementPoint.png": "ab193d544401e4991fae0e27b838d373",
"assets/assets/images/spear0.png": "dbdbcd86fcfe1e684ba600f2ad55595e",
"assets/assets/images/spear1.png": "28d66a10022e7f2c96babfbadb4bd66c",
"assets/assets/images/sword0.png": "96c8f13e694c6afbbb647743d0d12622",
"assets/assets/images/sword1.png": "811d2a0b994cd0081edea0c4efc67d12",
"assets/assets/tiled/terrain.tsx": "1726036c06a4ab54035f5a133ae09b96",
"assets/assets/tiled/units.tsx": "803b8f43e60432779d61af472b885da4",
"assets/assets/tiled/untitled.tmx": "7621427d0d9a4c1e72c591be5043d701",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cba6b1f6bd51815e18f3def2f0c754c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/tiled/terrain.tsx": "1726036c06a4ab54035f5a133ae09b96",
"assets/tiled/units.tsx": "803b8f43e60432779d61af472b885da4",
"assets/tiled/untitled.tmx": "7621427d0d9a4c1e72c591be5043d701",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f69b6902a1e2480a7d26baf03405d4a1",
"/": "f69b6902a1e2480a7d26baf03405d4a1",
"main.dart.js": "d8977998078e1e8bd37c245cbdb1f3ef",
"manifest.json": "83d533e5ab22a8928a684b90a19bb48d",
"version.json": "389a6e6e6f34312743ca5f36467c84b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
