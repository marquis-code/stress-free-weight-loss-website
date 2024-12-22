import { admin_api } from '@/api_factory/modules/admin'
import { ref, onMounted } from 'vue'

export const useFetchHealthTips = () => {
    const healthTips = ref([]) as any
    const loading = ref(false)

    const { $_fetch_health_tip } = admin_api

    const getHealthTips = async () => {
        loading.value = true
        const res = await $_fetch_health_tip() as any
        if (res.type !== 'ERROR') {
            healthTips.value = res?.data ?? []
        }
        loading.value = false
    }

    onMounted(() => {
        getHealthTips()
    })

    return { healthTips, loading, getHealthTips }
}
