export default defineNuxtPlugin((nuxtApp) => {
    const backButton = useBackButton()
    const router = useRouter()

    router.afterEach(() => {
        backButton.updateVisibility()
    })

    window.addEventListener('popstate', () => {
        backButton.updateVisibility()
    })

    nuxtApp.hook('app:mounted', () => {
        backButton.updateVisibility()
    })
})