import { admin_api } from '@/api_factory/modules/admin'
import { ref } from 'vue'

export const useCreateHealthTip = () => {
    const loading = ref(false)

    const { $_create_health_tip } = admin_api

    const createHealthTip = async (payload: any) => {
        loading.value = true
        const res = await $_create_health_tip(payload) as any
        loading.value = false
        return res
    }

    return { loading, createHealthTip }
}
