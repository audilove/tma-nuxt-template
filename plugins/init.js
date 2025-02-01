import { useMainStore } from '~/stores/mainStore'

export default async () => {
    const mainStore = useMainStore()
    await mainStore.serverInit()
}
