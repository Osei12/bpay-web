if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => a(e, c),
      f = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(i.map((e) => f[e] || r(e))).then((e) => (n(...e), t));
  };
}
define(["./workbox-e9849328"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "1cb319537ae08c3017cc2e56d923e7cd",
        },
        {
          url: "/_next/static/3BKXP6df7yTbSWesIcrDe/_buildManifest.js",
          revision: "4fbeece51afbb8a12c932d2ee1f18856",
        },
        {
          url: "/_next/static/3BKXP6df7yTbSWesIcrDe/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/25-e671dadfeff11fb9.js",
          revision: "e671dadfeff11fb9",
        },
        {
          url: "/_next/static/chunks/374-cfe8c9a9262fadb4.js",
          revision: "cfe8c9a9262fadb4",
        },
        {
          url: "/_next/static/chunks/71.012f8e90c2d8bb5c.js",
          revision: "012f8e90c2d8bb5c",
        },
        {
          url: "/_next/static/chunks/763-c4cd8c8f4357f2da.js",
          revision: "c4cd8c8f4357f2da",
        },
        {
          url: "/_next/static/chunks/79637b0d-2f8e7221e928ce00.js",
          revision: "2f8e7221e928ce00",
        },
        {
          url: "/_next/static/chunks/810.2a62262c158fdaff.js",
          revision: "2a62262c158fdaff",
        },
        {
          url: "/_next/static/chunks/822-b9ff488c26d673e6.js",
          revision: "b9ff488c26d673e6",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-2f217eb23ec0ec8b.js",
          revision: "2f217eb23ec0ec8b",
        },
        {
          url: "/_next/static/chunks/app/about/page-31703754b92b059f.js",
          revision: "31703754b92b059f",
        },
        {
          url: "/_next/static/chunks/app/appointments/page-29301342740618bb.js",
          revision: "29301342740618bb",
        },
        {
          url: "/_next/static/chunks/app/blog/page-c63404dc3cbbd5ea.js",
          revision: "c63404dc3cbbd5ea",
        },
        {
          url: "/_next/static/chunks/app/careers/page-78413d905d4a6820.js",
          revision: "78413d905d4a6820",
        },
        {
          url: "/_next/static/chunks/app/community/page-74ef43798e43f740.js",
          revision: "74ef43798e43f740",
        },
        {
          url: "/_next/static/chunks/app/contact/page-b922873c66600c5a.js",
          revision: "b922873c66600c5a",
        },
        {
          url: "/_next/static/chunks/app/cookies/page-18581bad250a404a.js",
          revision: "18581bad250a404a",
        },
        {
          url: "/_next/static/chunks/app/credit-building/page-ea0e82af01202ff4.js",
          revision: "ea0e82af01202ff4",
        },
        {
          url: "/_next/static/chunks/app/faq/page-c3915401b6596921.js",
          revision: "c3915401b6596921",
        },
        {
          url: "/_next/static/chunks/app/help/page-f63e812ff24a6a1b.js",
          revision: "f63e812ff24a6a1b",
        },
        {
          url: "/_next/static/chunks/app/layout-dd1b40ac1f1cbf9c.js",
          revision: "dd1b40ac1f1cbf9c",
        },
        {
          url: "/_next/static/chunks/app/live-chat/page-9696b98139f6ee97.js",
          revision: "9696b98139f6ee97",
        },
        {
          url: "/_next/static/chunks/app/mission/page-e94402037a7636aa.js",
          revision: "e94402037a7636aa",
        },
        {
          url: "/_next/static/chunks/app/page-2f85bc5533b095e5.js",
          revision: "2f85bc5533b095e5",
        },
        {
          url: "/_next/static/chunks/app/privacy/page-96d50568566687dc.js",
          revision: "96d50568566687dc",
        },
        {
          url: "/_next/static/chunks/app/security/page-d3f128affb74112d.js",
          revision: "d3f128affb74112d",
        },
        {
          url: "/_next/static/chunks/app/sevis-payment/page-6e537cdab4443883.js",
          revision: "6e537cdab4443883",
        },
        {
          url: "/_next/static/chunks/app/sitemap.xml/route-01c854eb8ba39df7.js",
          revision: "01c854eb8ba39df7",
        },
        {
          url: "/_next/static/chunks/app/student-loans/page-1859f6d77c8dbd6c.js",
          revision: "1859f6d77c8dbd6c",
        },
        {
          url: "/_next/static/chunks/app/terms/page-41787c83a86acef0.js",
          revision: "41787c83a86acef0",
        },
        {
          url: "/_next/static/chunks/framework-b2916a93df015e89.js",
          revision: "b2916a93df015e89",
        },
        {
          url: "/_next/static/chunks/main-7181edacf7a62311.js",
          revision: "7181edacf7a62311",
        },
        {
          url: "/_next/static/chunks/main-app-5aa304629d173c6b.js",
          revision: "5aa304629d173c6b",
        },
        {
          url: "/_next/static/chunks/pages/_app-5d1c5f5f9d0142ec.js",
          revision: "5d1c5f5f9d0142ec",
        },
        {
          url: "/_next/static/chunks/pages/_error-19b8ad5779157c1f.js",
          revision: "19b8ad5779157c1f",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-e02c7ff9cdbe1340.js",
          revision: "e02c7ff9cdbe1340",
        },
        {
          url: "/_next/static/css/8b2209c82a532d58.css",
          revision: "8b2209c82a532d58",
        },
        {
          url: "/assets/icons/appstore.svg",
          revision: "fdabfe2454168f46f347de05ad0bec63",
        },
        {
          url: "/assets/icons/googleplay.svg",
          revision: "bd8f2843df647e82df054df459b65bb1",
        },
        {
          url: "/assets/images/mock-up-2.svg",
          revision: "62a0b9af5f4171600b6e144b51918882",
        },
        {
          url: "/assets/images/mock-up-4.png",
          revision: "1f76bab78ebb87c575833e86ae31367b",
        },
        {
          url: "/assets/images/mock-up.svg",
          revision: "52a42764f0ba0ef949c39c243b01bf3e",
        },
        {
          url: "/assets/images/profile-1.webp",
          revision: "a9dd5c3706d03211649a16b3cdcf11f4",
        },
        {
          url: "/assets/images/profile-2.jpg",
          revision: "aab78fed0d7e7d7b10316186d7834753",
        },
        {
          url: "/assets/images/profile-3.jpg",
          revision: "1e3f44ea28d46f90fa7141f32ff66bc9",
        },
        {
          url: "/assets/images/profile-4.jpg",
          revision: "8b923f070cf11788c0e913121292e423",
        },
        {
          url: "/assets/logo/adaptive-icon.png",
          revision: "f3bb49ebbfe7f38779d9e6e49c4d8dea",
        },
        {
          url: "/assets/logo/icon.png",
          revision: "d798ed5af8486bdc0d89716b39dfe6a9",
        },
        { url: "/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
        { url: "/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/robots.txt", revision: "f1bc119dfd43d7857fad3448f2f011b6" },
        {
          url: "/site.webmanifest",
          revision: "7d9c6ba0e4efced6d0f0efc87ae93f34",
        },
        { url: "/vercel.svg", revision: "c0af2f507b369b085b35ef4bbe3bcf1e" },
        { url: "/window.svg", revision: "a2760511c65806022ad20adf74370ff3" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
