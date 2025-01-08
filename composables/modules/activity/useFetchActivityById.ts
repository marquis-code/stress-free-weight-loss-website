import { activity_api } from '@/api_factory/modules/activity'
import { ref } from 'vue'

export const useFetchActivityById = (id: any) => {
    const activity = ref(null) as any
    const loading = ref(false)

    const { $_fetch_activities_by_id } = activity_api

    const getActivityById = async () => {
        loading.value = true
        const res = await $_fetch_activities_by_id(id) as any
        if (res.type !== 'ERROR') {
            activity.value = res?.data ?? null
        }
        loading.value = false
    }

    return { activity, loading, getActivityById }
}
