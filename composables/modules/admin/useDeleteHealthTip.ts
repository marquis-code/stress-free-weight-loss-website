import { admin_api } from '@/api_factory/modules/admin'
import { ref } from 'vue'

export const useDeleteHealthTip = () => {
    const loading = ref(false)

    const { $_delete_health_tip } = admin_api

    const deleteHealthTip = async (id: any) => {
        loading.value = true
        const res = await $_delete_health_tip(id) as any
        loading.value = false
        return res
    }

    return { loading, deleteHealthTip }
}
