import { GATEWAY_ENDPOINT } from '../axios.config'
export const activity_api = {
    $_fetch_activities: () => {
        const url = '/activities'
        return GATEWAY_ENDPOINT.get(url)
    },
    $_fetch_activities_by_id: (id: any) => {
        const url = `/activities/${id}`
        return GATEWAY_ENDPOINT.get(url)
    },
    $_create_activity: (payload: any) => {
        const url = `/activities`
        return GATEWAY_ENDPOINT.post(url, payload)
    },
    $_update_activity: (id: string | any, payload: any) => {
        const url = `/activities/${id}`
        return GATEWAY_ENDPOINT.put(url, payload)
    },
    $_delete_activity: (id: any) => {
        const url = `/activities/${id}`
        return GATEWAY_ENDPOINT.delete(url)
    }
}
