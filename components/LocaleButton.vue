<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { locale, setLocale } = useI18n()

function changeLocale(lang) {
    setLocale(lang)
}
</script>

<template>
    <button @click="changeLocale(locale === 'ru' ? 'en' : 'ru')" class="text-2xl active:scale-95 transition-all">
        <Icon v-if="locale === 'ru'" icon="circle-flags:ru" />
        <Icon v-else icon="circle-flags:lang-en" />
    </button>
</template>