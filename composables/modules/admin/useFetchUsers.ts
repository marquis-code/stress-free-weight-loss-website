import { admin_api } from '@/api_factory/modules/admin'
import { ref, onMounted } from 'vue'

const loading = ref(false)
const users = ref({}) as any

export const useFetchUsers = () => {
    const { $_fetch_users } = admin_api

    const getUsers = async () => {
        loading.value = true
        const res = await $_fetch_users() as any
        console.log(res, 'res here')
        if (res.status === 200 || res.status === 201) {
            users.value = res?.data ?? {}
        }
        loading.value = false
    }

    onMounted(() => {
        getUsers()
    })

    return { users, loading, getUsers }
}
