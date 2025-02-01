// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/scripts', '@pinia/nuxt', '@formkit/auto-animate/nuxt', 'nuxt-swiper'],
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
    '~/plugins/init.js'
  ],
  runtimeConfig: {
    JWT_SECRET_KEY: '',
    BOT_TOKEN: '',
    public: {

    }
  },
  nitro: {
    publicAssets: [
      {
        baseURL: '/',
        dir: 'public'
      }
    ]
  }
})
