export default {
  ssr: false,
  target: "static",

  app: {
    head: {
      title: "SWL - Stress Free Weight Loss With Dr Ada",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: 'viewport',
          content: 'initial-scale=1.0, user-scalable=no, width=device-width',
        },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-touch-fullscreen', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2048-2732.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2732-2048.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-1668-2388.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2388-1668.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-1536-2048.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2048-1536.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-1488-2266.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2266-1488.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-1640-2360.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2360-1640.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-1668-2224.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2224-1668.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-1620-2160.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2160-1620.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-1320-2868.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2868-1320.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-1206-2622.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2622-1206.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-1290-2796.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        },
        {
          "rel": "apple-touch-startup-image",
          "href": "/icons/apple-splash-dark-2796-1290.jpg",
          "media": "(prefers-color-scheme: dark) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        }
      ],
      script:[
        {
        src:"https://cdn.jsdelivr.net/npm/pwacompat@2.0.6/pwacompat.min.js",
          integrity:"sha384-GOaSLecPIMCJksN83HLuYf9FToOiQ2Df0+0ntv7ey8zjUHESXhthwvq9hXAZTifA",
          crossorigin:"anonymous" ,defer:true
        }
      ]
    },
    pageTransition: false,
  },
  // Alternatively, for finer control, you can disable loading indicators and other settings:
  loading: false,
  loadingIndicator: false, // Completely removes the default Nuxt loading screen

  modules: ["@vite-pwa/nuxt", "@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "SWL - Stress Free Weight Loss",
      short_name: "SWL",
      description:
        "Discover a stress-free and healthy approach to weight loss with our personalized coaching program. Achieve your weight loss goals and maintain a healthy lifestyle for life.",
      theme_color: "#27396B",
      background_color: "#27396B",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          "src": "/icons/manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/icons/manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/icons/manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/icons/manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ],
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: "CacheFirst",
          options: {
            cacheName: "google-fonts-stylesheets",
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
            },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: "CacheFirst",
          options: {
            cacheName: "google-fonts-webfonts",
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
            },
          },
        },
      ],
    },
    icon: {
      iosSizes: []
    },
    meta: {
      theme_color: '#000000',
      appleStatusBarStyle: 'black-translucent', // iOS-specific settings
      mobileApp: true,
      mobileAppIOS: false
    },
  },
  css: ["/assets/css/main.css", '@/assets/css/custom.css'],
  dir: {
    static: 'public', // Ensure the  folder is treated as static
  },
  compatibilityDate: "2024-10-30",
};