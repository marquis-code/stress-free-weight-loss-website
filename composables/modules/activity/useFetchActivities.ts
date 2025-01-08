import { admin_api } from '@/api_factory/modules/admin'
import { ref, onMounted } from 'vue'

export const useFetchActivities = () => {
    const activities = ref([]) as any
    const loading = ref(false)

    const { $_fetch_activities } = admin_api

    const getActivities = async () => {
        loading.value = true
        const res = await $_fetch_activities() as any
        if (res.type !== 'ERROR') {
            activities.value = res?.data ?? []
        }
        loading.value = false
    }

    onMounted(() => {
        getActivities()
    })

    return { activities, loading, getActivities }
}
