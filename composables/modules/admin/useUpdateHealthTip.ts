import { admin_api } from '@/api_factory/modules/admin'
import { ref } from 'vue'

export const useUpdateHealthTip = () => {
    const loading = ref(false)

    const { $_update_health_tip } = admin_api

    const updateHealthTip = async (id: string | any, payload: any) => {
        loading.value = true
        const res = await $_update_health_tip(id, payload) as any
        loading.value = false
        return res
    }

    return { loading, updateHealthTip }
}
