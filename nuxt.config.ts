import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "SWL - Stress Free Weight Loss With Dr Ada",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  plugins: ["~/plugins/aos.client.ts"],
  googleFonts: {
    families: {
      Roboto: true, // Replace 'Roboto' with any available Google Font
    },
    display: 'swap', // Optional: Controls how the font is displayed
  },
  modules: ["@vite-pwa/nuxt", '@nuxtjs/google-fonts'],
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
          src: "/logo.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/logo.png",
          sizes: "512x512",
          type: "image/png",
        },
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
  },
  dir: {
    static: 'public', // Ensure the public folder is treated as static
  },

});