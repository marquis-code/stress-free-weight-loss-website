import { activity_api } from '@/api_factory/modules/activity'
import { ref } from 'vue'

export const useCreateActivity = () => {
    const loading = ref(false)

    const { $_create_activity } = activity_api

    const createActivity = async (payload: any) => {
        loading.value = true
        try {
            const res = await $_create_activity(payload) as any
            loading.value = false
            return res
        } catch (err) {
            loading.value = false
            return null
        }
    }

    return { loading, createActivity }
}
