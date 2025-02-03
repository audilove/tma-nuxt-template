export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    if (config.public.hapticEnabled && window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.HapticFeedback) {
        const triggerHapticFeedback = (type) => {
            switch (type) {
                case 'success':
                    window.Telegram.WebApp.HapticFeedback.notificationOccurred('success')
                    break
                case 'error':
                    window.Telegram.WebApp.HapticFeedback.notificationOccurred('error')
                    break
                case 'warning':
                    window.Telegram.WebApp.HapticFeedback.notificationOccurred('warning')
                    break
                default:
                    window.Telegram.WebApp.HapticFeedback.impactOccurred('light')
                    break
            }
        }

        nuxtApp.provide('haptic', triggerHapticFeedback)
    } else {
        console.warn('HapticFeedback не поддерживается на этом устройстве или отключен в конфигурации')
    }
})
