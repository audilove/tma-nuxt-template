<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div class="relative text-sm flex flex-col p-4 rounded-2xl gap-y-1 bg-secondary_bg_color">
        <div class="flex items-center gap-x-2">
            <span class="w-2 h-2 rounded-full bg-text_color animate-pulse" />
            <span class="font-medium uppercase">Уведомление</span>
        </div>

        <div class="flex items-center gap-x-1">
            <span>{{ title }}</span>
        </div>
    </div>
</template>