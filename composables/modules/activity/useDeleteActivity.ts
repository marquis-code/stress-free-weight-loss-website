import { activity_api } from '@/api_factory/modules/activity'
import { ref } from 'vue'

export const useDeleteActivity = () => {
    const loading = ref(false)

    const { $_delete_activity } = activity_api

    const deleteActivity = async (id: any) => {
        loading.value = true
        try {
            const res = await $_delete_activity(id)
            loading.value = false
            return res
        } catch (err) {
            loading.value = false
            return null
        }
    }

    return { loading, deleteActivity }
}
