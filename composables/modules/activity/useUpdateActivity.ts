import { activity_api } from '@/api_factory/modules/activity'
import { ref } from 'vue'

export const useUpdateActivity = () => {
    const loading = ref(false)

    const { $_update_activity } = activity_api

    const updateActivity = async (id: string | any, payload: any) => {
        loading.value = true
        try {
            const res = await $_update_activity(id, payload)
            loading.value = false
            return res
        } catch (err) {
            loading.value = false
            return null
        }
    }

    return { loading, updateActivity }
}
