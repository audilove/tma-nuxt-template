export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('webapp', window.Telegram?.WebApp)
})
