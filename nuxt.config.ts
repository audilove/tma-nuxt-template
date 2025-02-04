// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/scripts', '@pinia/nuxt', '@formkit/auto-animate/nuxt', 'nuxt-swiper', '@nuxt/fonts', '@nuxtjs/i18n'],
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],

  app: {
    head: {
      title: '',
      link: [
        { rel: 'icon', type: 'image/png', href: '#' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' }
      ],
      script: [
        {
          src: "https://telegram.org/js/telegram-web-app.js",
          type: "text/javascript",
          onload: "window.Telegram?.WebApp?.ready(); window.Telegram?.WebApp?.expand(); window.Telegram?.WebApp?.disableVerticalSwipes(); window.Telegram?.WebApp?.lockOrientation();"
        }
      ]
    },
  },

  plugins: [
    '~/plugins/telegram.client.js',
    '~/plugins/init.js',
    '~/plugins/haptic.client.js',
    '~/plugins/backButton.client.js'
  ],

  runtimeConfig: {
    JWT_SECRET_KEY: '',
    BOT_TOKEN: '',
    public: {
      hapticEnabled: true
    }
  },
  i18n: {
    strategy: 'no_prefix',
    langDir: "locales",
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'ru', language: 'ru-RU', file: 'ru.json' }
    ],
    defaultLocale: 'en'
  },
  nitro: {
    publicAssets: [
      {
        baseURL: '/',
        dir: 'public'
      }
    ]
  },

  compatibilityDate: '2025-02-04'
})