import { admin_api } from '@/api_factory/modules/admin'
import { ref, onMounted } from 'vue'

export const useFetchActivityById = (id: any) => {
    const activity = ref({}) as any
    const loading = ref(false)

    const { $_fetch_activities_by_id } = admin_api

    const getActivityById = async () => {
        loading.value = true
        const res = await $_fetch_activities_by_id(id) as any
        if (res.type !== 'ERROR') {
            activity.value = res?.data ?? {}
        }
        loading.value = false
    }

    onMounted(() => {
        getActivityById()
    })

    return { activity, loading, getActivityById }
}
