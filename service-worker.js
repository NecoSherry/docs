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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.727e7545.css",
    "revision": "7eca325aa96e760fd23e68f0bdb223a3"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/architecture.30de09c7.png",
    "revision": "30de09c7c6530bc11ece7d9553497563"
  },
  {
    "url": "assets/img/connex.186d320e.jpg",
    "revision": "186d320e35a63378da3873e4c359aae7"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/js/10.ea619ca3.js",
    "revision": "5fbda109f5d4759a5770f24f7797f575"
  },
  {
    "url": "assets/js/11.2e96fa7e.js",
    "revision": "86ba77044b6a1473b1402b7ae68a3bd4"
  },
  {
    "url": "assets/js/12.86c19ea2.js",
    "revision": "4b70ef445e6358687e4da239c1f060b0"
  },
  {
    "url": "assets/js/13.a8ed1307.js",
    "revision": "4035353b09411aaf610054d9d5118333"
  },
  {
    "url": "assets/js/14.43cae04d.js",
    "revision": "f6cbc002ed5ab25c0f55545163fccbeb"
  },
  {
    "url": "assets/js/15.2166d056.js",
    "revision": "d7cfa1626f801d8cb5471982e7c16463"
  },
  {
    "url": "assets/js/16.a05bb904.js",
    "revision": "82e6aed3cd5823304f63f3e0d29fc93b"
  },
  {
    "url": "assets/js/17.9da18bbc.js",
    "revision": "474ca68b36ea7792b52c0d89cb467a44"
  },
  {
    "url": "assets/js/18.b17df9ce.js",
    "revision": "0ae0a0fedd182f89a13460a82e0ff767"
  },
  {
    "url": "assets/js/19.40aa8734.js",
    "revision": "bf15e495c63dec8bef4658ef974f52e5"
  },
  {
    "url": "assets/js/20.8cb58c1e.js",
    "revision": "0602827bae1334831d07c48aa670f9bd"
  },
  {
    "url": "assets/js/21.52c33a17.js",
    "revision": "b7f2ff6f098ade23cac2075bdf54abd4"
  },
  {
    "url": "assets/js/22.6dff57a3.js",
    "revision": "1903f83ead913a9e14dd01cca6d36312"
  },
  {
    "url": "assets/js/23.6bfb969d.js",
    "revision": "4f70653403ec62380e2e83b0ec0e95f3"
  },
  {
    "url": "assets/js/24.44b7716f.js",
    "revision": "6693e8c28f8b9347c6d592355885ba02"
  },
  {
    "url": "assets/js/25.c8c583d5.js",
    "revision": "c90e0cbc31db66673b0fe44a92457264"
  },
  {
    "url": "assets/js/26.d3d856ec.js",
    "revision": "7b904ee2d69c84a4e0890a4923b1e3f6"
  },
  {
    "url": "assets/js/27.e27f4cb8.js",
    "revision": "41b481975b044d131b9e7e0d60e0a281"
  },
  {
    "url": "assets/js/28.d75f35bc.js",
    "revision": "28294d3c4e80589769e33974d27394d9"
  },
  {
    "url": "assets/js/29.5fd52193.js",
    "revision": "e1f5fa279700cd83d9efdf0a664f2098"
  },
  {
    "url": "assets/js/3.b4a9e1a9.js",
    "revision": "1454d9f6fce0e672a1336bd7f0656a38"
  },
  {
    "url": "assets/js/30.42427fe8.js",
    "revision": "efbba081258a6fb225540067a58e5537"
  },
  {
    "url": "assets/js/31.030b20b3.js",
    "revision": "55a87fcc21fdb617bc888d99aa680c0b"
  },
  {
    "url": "assets/js/32.c6982e54.js",
    "revision": "5cf2fe8e3764756621989d0aa0c1a855"
  },
  {
    "url": "assets/js/33.c1ce93b2.js",
    "revision": "3306eb441ef6bc7bc059e59aec04e4d6"
  },
  {
    "url": "assets/js/34.63d5aaad.js",
    "revision": "6c50487f24af1bb4389aef71783b2be9"
  },
  {
    "url": "assets/js/35.95dcba5e.js",
    "revision": "e3a75460952c5c3aead54a680e5839a3"
  },
  {
    "url": "assets/js/36.54b1fe82.js",
    "revision": "9994436c51337569d07eb32e664848d8"
  },
  {
    "url": "assets/js/37.bbf14b99.js",
    "revision": "1fa3b9b461bcd226a9d7c5b61ec03f86"
  },
  {
    "url": "assets/js/38.7d53e192.js",
    "revision": "5410d7808e5179f05437dad1bdc337c8"
  },
  {
    "url": "assets/js/39.1dfab5b6.js",
    "revision": "7361b8059d191dcc960562ced788ec39"
  },
  {
    "url": "assets/js/4.9fbef010.js",
    "revision": "dea51d6e08ba423935ceb7688d137358"
  },
  {
    "url": "assets/js/40.ffcf8941.js",
    "revision": "e8f3886115ae3751d566196d75c07482"
  },
  {
    "url": "assets/js/41.90f59d3b.js",
    "revision": "b1bd3dda00121f77cf36cd46f2b7ac03"
  },
  {
    "url": "assets/js/42.ba529dcf.js",
    "revision": "60a741ab18d45e268f1d120a70a39a9f"
  },
  {
    "url": "assets/js/43.b32cbe1f.js",
    "revision": "174321de191910140918e289ab0f5371"
  },
  {
    "url": "assets/js/44.8bd65a8b.js",
    "revision": "5250438062f991f3740c35656ddd884c"
  },
  {
    "url": "assets/js/45.4f15ee9d.js",
    "revision": "318b24fa44f0d09a005bc1ee600f0424"
  },
  {
    "url": "assets/js/46.3e43704f.js",
    "revision": "7ef836737b37ac4a9411423379e6fb5a"
  },
  {
    "url": "assets/js/47.d5b1169f.js",
    "revision": "a2c94a3313d8b22c38c46a42f816b3fb"
  },
  {
    "url": "assets/js/48.19c560d9.js",
    "revision": "d30c60bc8cb5524d8f2980079218b30d"
  },
  {
    "url": "assets/js/5.5d2a96e6.js",
    "revision": "fe3aa5d0c99cf2ea92a98e75185a6240"
  },
  {
    "url": "assets/js/6.0779f2ad.js",
    "revision": "af0bd9aacc7e4a4af42da514ef841ea3"
  },
  {
    "url": "assets/js/7.d14b27ba.js",
    "revision": "aebd2b5327e2d31296b2e8704d61b16b"
  },
  {
    "url": "assets/js/8.77fe2b1e.js",
    "revision": "c4b451fe69490443fd7f63303041b222"
  },
  {
    "url": "assets/js/9.885e62d8.js",
    "revision": "0d32aa145c7441df6b83c6a7e98afb2c"
  },
  {
    "url": "assets/js/app.93564c7a.js",
    "revision": "0276364cbf81c14d3937759945a7cba5"
  },
  {
    "url": "assets/js/vendors~docsearch.f7385de5.js",
    "revision": "0e139e7e3e0d0e8bc373456260e50940"
  },
  {
    "url": "connex/api.html",
    "revision": "6b95cefd31f6cb9cbb130cbdd4a53206"
  },
  {
    "url": "connex/demos-and-service.html",
    "revision": "0a87ffd48dae5be5cbcad932f054e999"
  },
  {
    "url": "connex/implementation.html",
    "revision": "5a0d5fd649ab6b193295930ab9060c97"
  },
  {
    "url": "connex/index.html",
    "revision": "f44fe1d6b6885aec78ea404d4a0fb43b"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "8a0fa7470d720d8d9128336e9cb07a8e"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/index.html",
    "revision": "0a8ec775c7408bdca4dd2d4dcbd62b5f"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "75736813d966011f63d25baa5bd5c23d"
  },
  {
    "url": "sync/faq.html",
    "revision": "9da00e783e2881ab17763b8735d0ae9b"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "b6e15410f3a0712b3ed07c121ae52b1d"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "a5ee641b7fee04a4a06d0c0285288236"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "def46b059eb5c6ca4e1288dce54b2cc6"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "a1c22f5d421d50a43676a31cb5777227"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "3131516e6013d7a36f622938aebd147f"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "c52902af0d4121cabfed7722aaa9c2f9"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "4d2afafd58ced56dd563615c53dd025a"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "5fb15326b13359ba5cc530f484bdfca9"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "5b80a6564ac484605250839a1e20c1f2"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "78aba08e377c70c57bdc2cc3741d35ec"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "52d0ce9487ae4c48c75031773598ccdb"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "868f921ba4bec986162a3ba145e8e12d"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "5ace1755fff88a10caec59d9bdba71b2"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "ad09d8393ee3fbb1b146ebcb553735d1"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "eef94c25562025c81ac3fbed16fb5e4b"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "e5928f4945c02750467d1b99c4a2f085"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "9267de563b46eaa665198d5f975d2db1"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "5f5726fece6cc8da130891d68907f127"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "2d8464671efac268fcda5b77ad379306"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "96ab5a01952517d7af2f2d85ec4ccfa5"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "82fccb11d9ea2552cb02d33adb24f504"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "d62dd5b0f1e52ac2b26464813ed5a28d"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "277e3e959c3026c4f79c9931e39fb28f"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "577147c8b9314fc7f2c02ac34d63a75d"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "f1517741fa6a055b751c84678d461658"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "b5885d5ff50603b556ce51a98f122593"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "26d3ba7365d81799047dc97311137c7e"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "21f9961f35d33ce28c234d3f5f4da9de"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "a29b359fff3552d4f13ac97b5b81eac4"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "ed040f9a2d9ab87b102dd42044a20886"
  },
  {
    "url": "tutorials/index.html",
    "revision": "ecf439345f7f3994305d00d7865c6bfd"
  }
].concat(self.__precacheManifest || []);
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
