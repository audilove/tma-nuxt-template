<script setup>

import { useMainStore } from '~/stores/mainStore'
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const store = useMainStore()
const toasts = computed(() => store.toasts)
const [parent] = useAutoAnimate()
</script>

<template>
    <transition name="slide-top" appear>
        <div v-if="toasts.length > 0" ref="parent"
            class="flex z-[5] flex-col gap-y-2 fixed top-0 left-0 right-0 w-full from-black/50 to-transparent bg-gradient-to-b py-6 px-4">
            <Toast v-for="toast, index in toasts" :key="index" :title="toast.title" />
        </div>
    </transition>
</template>