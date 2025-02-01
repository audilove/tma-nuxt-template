<script setup>
import { useMainStore } from '~/stores/mainStore.js'
import { useRouter } from 'vue-router'

const mainStore = useMainStore()
const router = useRouter()
const awaitStartupParams = ref(true)

onMounted(async () => {
  await mainStore.initializeProject()

  const tgWebAppStartParam = new URLSearchParams(window.location.search).get('tgWebAppStartParam')
  if (tgWebAppStartParam) {
    if (/^\d+$/.test(tgWebAppStartParam)) {
      console.log('tgWebAppStartParam', tgWebAppStartParam)
    }
  }
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
