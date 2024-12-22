import { admin_api } from '@/api_factory/modules/admin'
import { ref, onMounted } from 'vue'

export const useFetchUsers = () => {
    const users = ref([]) as any
    const loading = ref(false)

    const { $_fetch_users } = admin_api

    const getUsers = async () => {
        loading.value = true
        const res = await $_fetch_users() as any
        if (res.type !== 'ERROR') {
            users.value = res?.data ?? []
        }
        loading.value = false
    }

    onMounted(() => {
        getUsers()
    })

    return { users, loading, getUsers }
}
