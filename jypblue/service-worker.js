/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3939491d95723c504ed48f2b7f967473"
  },
  {
    "url": "assets/css/0.styles.714a7de3.css",
    "revision": "30faf5953ae7a96a0b8925001ee5ffde"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a92c7796.js",
    "revision": "375a9c115934700266c919671be6463f"
  },
  {
    "url": "assets/js/11.67631eca.js",
    "revision": "0f890970acf89d24229f8ccf91f85ad0"
  },
  {
    "url": "assets/js/12.63135493.js",
    "revision": "3b3ee290ac3c617b328677f4be8d3298"
  },
  {
    "url": "assets/js/13.febed3a8.js",
    "revision": "3cb53860c10ea166fbf70e11cacb483d"
  },
  {
    "url": "assets/js/14.2230e208.js",
    "revision": "78da8a1473c0d30e952195cae8788422"
  },
  {
    "url": "assets/js/15.f226a415.js",
    "revision": "e36f0dfc5bbfa517dcc8c48a79f6f252"
  },
  {
    "url": "assets/js/16.ec4c1394.js",
    "revision": "c8ea8435a26a33336c1f7b1da3ba20bb"
  },
  {
    "url": "assets/js/17.84b981c0.js",
    "revision": "90d3699473cc307a95fc17b103c8ea62"
  },
  {
    "url": "assets/js/18.331064e0.js",
    "revision": "c14a49cdf600a8a901c75642ff27e4e5"
  },
  {
    "url": "assets/js/19.74fb3040.js",
    "revision": "c4312e8c7f25df030e45f94f6e70fb3a"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.34d6df89.js",
    "revision": "df8825d250e934804c9d1693bf9de288"
  },
  {
    "url": "assets/js/21.ef32ca58.js",
    "revision": "6cfacb16a3a2bcafe96587c47e983adf"
  },
  {
    "url": "assets/js/22.67665b51.js",
    "revision": "3080d2a5381501a0d0e329046a6b7e05"
  },
  {
    "url": "assets/js/23.72babcd9.js",
    "revision": "98797a23f64910ec949254392eacaf18"
  },
  {
    "url": "assets/js/24.3e30ac6f.js",
    "revision": "23801d65679b784317c8ee2b57c15f57"
  },
  {
    "url": "assets/js/25.4b3adfa4.js",
    "revision": "b78548a041d92048d320ccf9870eabc2"
  },
  {
    "url": "assets/js/26.a371405f.js",
    "revision": "dba82c9c660d1e8460676f0c388b1922"
  },
  {
    "url": "assets/js/27.284638b8.js",
    "revision": "c33d92e078079ada07498b8d026514cb"
  },
  {
    "url": "assets/js/28.8c174e5a.js",
    "revision": "c715422d5d552a96216c980dc713e31b"
  },
  {
    "url": "assets/js/29.379068d6.js",
    "revision": "adc4103d6c81a591a51703383c93db7c"
  },
  {
    "url": "assets/js/3.5904a5a5.js",
    "revision": "662f9cc1348f701680e3af24f5c9de21"
  },
  {
    "url": "assets/js/30.975a7ed2.js",
    "revision": "6218a5f2a3b8fdaa2a933e719b14011d"
  },
  {
    "url": "assets/js/31.6a5dd5da.js",
    "revision": "e1b2fb49312f2b74b4d35e725a1cc7fe"
  },
  {
    "url": "assets/js/4.50d059d7.js",
    "revision": "968feb4e5f35e2a75821c8d9a21025f8"
  },
  {
    "url": "assets/js/5.cc56cc36.js",
    "revision": "8f1c4a48503bbe5581dab43f120af3e6"
  },
  {
    "url": "assets/js/6.523d0d3a.js",
    "revision": "bcb813d89963fa59c0341e702467511c"
  },
  {
    "url": "assets/js/7.a2704e63.js",
    "revision": "8721853ddfdacffc4c04e5d9607cc60c"
  },
  {
    "url": "assets/js/8.10ae146a.js",
    "revision": "bbacbafd4b6a71bac9fedcee5c67ead2"
  },
  {
    "url": "assets/js/9.6a132ab6.js",
    "revision": "a489423b663c34fa53989a3b12287e6f"
  },
  {
    "url": "assets/js/app.7bade2a6.js",
    "revision": "60e8d97d9c7300f5542033f574473538"
  },
  {
    "url": "config/index.html",
    "revision": "b7819854249c665ed07b09e825ab6b7f"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "8c506b970b23505d5a3a8c747b29fa20"
  },
  {
    "url": "guide/assets.html",
    "revision": "90b1af7922428870fa88bb19b0616855"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "6cde3af1f96b873f5a040119d4bf2614"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "9265035082b304b3c198501ab5d3f248"
  },
  {
    "url": "guide/deploy.html",
    "revision": "591e18e7faca47092a5e9135294c8cba"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c68c72cb1ae566c80dc1e63cebd53330"
  },
  {
    "url": "guide/i18n.html",
    "revision": "6499ce40f17c98eb7a01eacf91fc8631"
  },
  {
    "url": "guide/index.html",
    "revision": "39f4affbacfa948d1faee350b2c5c6cb"
  },
  {
    "url": "guide/markdown.html",
    "revision": "8696170c398cb4a5fd96156c7a6be118"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "9ad513293b8be4e126880af136ee62e5"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "277f00e2e91b50a002c83533fafc5192"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "a02d20e47a7710198ceec2815ae8a418"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "9f71432f3940c07b41834ac1f0884e01"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "9947a58715696fcabbdeb30454460bdf"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "ac1787e38fc864fc55ea62f123afa7ea"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "72bcd289efbbda2d1bba9b43e693c8d8"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "70a5e473fff6c84f2056abdb28368e79"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "a85eb6d50ac27e1ea53a71b2b7271a6b"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "2acf7d4d3c90458a04f38e6fb2d46731"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "9962f7814a4332e4627a0366af3c89f6"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "ad8924bf3b8832337b0f38b651cf26fa"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "cd2b811567b76722daa4dd595f7b0ca6"
  },
  {
    "url": "zh/index.html",
    "revision": "d46e18aacd50115de0355696fc5016d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
