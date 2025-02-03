export const useBackButton = () => {
    const router = useRouter()
    const { $webapp, $haptic } = useNuxtApp()

    const customHandler = ref(null)
    const forceHidden = ref(false)

    const handleBack = () => {
        console.log('handleBack called, customHandler:', !!customHandler.value)

        if (customHandler.value) {
            customHandler.value()
            return
        }

        $haptic()
        router.back()
    }

    const setCustomHandler = (handler) => {
        customHandler.value = handler
    }

    const resetCustomHandler = () => {
        customHandler.value = null
    }

    const updateVisibility = () => {
        $webapp.offEvent('backButtonClicked', handleBack)

        if (forceHidden.value) {
            $webapp.BackButton.hide()
            return
        }

        const currentRoute = router.currentRoute.value
        const historyState = router.options.history.state
        const canGoBack = historyState?.position > 0 && currentRoute.path !== '/'

        if (canGoBack || customHandler.value) {
            $webapp.BackButton.show()
            $webapp.onEvent('backButtonClicked', handleBack)
        } else {
            $webapp.BackButton.hide()
        }
    }

    const hide = () => {
        forceHidden.value = true
        updateVisibility()
    }

    const show = () => {
        forceHidden.value = false
        updateVisibility()
    }

    onMounted(() => {
        updateVisibility()
    })

    onUnmounted(() => {
        $webapp.BackButton.hide()
        $webapp.offEvent('backButtonClicked', handleBack)
    })

    return {
        setCustomHandler,
        resetCustomHandler,
        updateVisibility,
        hide,
        show
    }
}