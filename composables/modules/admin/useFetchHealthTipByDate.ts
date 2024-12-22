// import { admin_api } from '@/api_factory/modules/admin'
// import { ref, onMounted } from 'vue'

// export const useFetchHealthTipByDate = (date: string) => {
//     const healthTips = ref([]) as any
//     const loading = ref(false)

//     const { $_fetch_health_tip_by_date } = admin_api

//     const getHealthTipByDate = async () => {
//         loading.value = true
//         const res = await $_fetch_health_tip_by_date(date) as any
//         if (res.type !== 'ERROR') {
//             healthTips.value = res?.data ?? []
//         }
//         loading.value = false
//     }

//     onMounted(() => {
//         getHealthTipByDate()
//     })

//     return { healthTips, loading, getHealthTipByDate }
// }

import { admin_api } from '@/api_factory/modules/admin'
import { ref, watch } from 'vue'

export const useFetchHealthTipByDate = () => {
    const healthTips = ref([]) as any
    const loading = ref(false)

    // Set default date to the current date in YYYY-MM-DD format
    const selectedDate = ref(new Date().toISOString().split('T')[0])

    const { $_fetch_health_tip_by_date } = admin_api

    const getHealthTipByDate = async () => {
        if (!selectedDate.value) return

        loading.value = true
        const res = await $_fetch_health_tip_by_date(selectedDate.value) as any
        if (res.type !== 'ERROR') {
            healthTips.value = res?.data ?? []
        }
        loading.value = false
    }

    watch(selectedDate, () => {
        getHealthTipByDate()
    }, { immediate: true })

    return { healthTips, loading, selectedDate, getHealthTipByDate }
}
