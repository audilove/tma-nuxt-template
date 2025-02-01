import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {

    const webapp = useNuxtApp().$webapp

    const config = useRuntimeConfig()

    const fetchNewToken = async (initData) => {
        try {
            const data = await $fetch('/api/generate-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ initData }),
            })

            if (data.success) {
                sessionStorage.setItem('token', data.token)
                sessionStorage.setItem('refresh_token', data.refresh_token)
                return data.token
            } else {
                console.error('Error:', data.message)
                return null
            }
        } catch (error) {
            console.error('Error fetching token:', error)
            return null
        }
    }

    const getToken = async () => {
        if (webapp?.initData) {
            console.log(webapp?.initData)
        }

        let initData = webapp?.initData || ''
        if (!initData) return
        let token = sessionStorage.getItem('token')

        if (!token) {
            token = await fetchNewToken(initData)
        }

        return token
    }

    const initializeProject = async () => {
        const token = await getToken()
    }

    const serverInit = async () => {
        console.log('serverInit')
    }

    return {
        serverInit,
        initializeProject
    }
})