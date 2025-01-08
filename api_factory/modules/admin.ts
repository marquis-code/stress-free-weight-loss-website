import { GATEWAY_ENDPOINT } from '../axios.config'
export const admin_api = {
	$_fetch_users: () => {
		const url = '/users'
		return GATEWAY_ENDPOINT.get(url)
	},
    $_fetch_activities: () => {
		const url = '/activities'
		return GATEWAY_ENDPOINT.get(url)
	},
    $_fetch_activities_by_id: (id: any) => {
		const url = `/activities/${id}`
		return GATEWAY_ENDPOINT.get(url)
	},
    $_create_health_tip: (payload: any) => {
		const url = `/health-tips`
		return GATEWAY_ENDPOINT.post(url, payload)
	},
    $_update_health_tip: (id: string | any, payload: any) => {
		const url = `/health-tips/${id}`
		return GATEWAY_ENDPOINT.patch(url, payload)
	},
    $_fetch_health_tip: () => {
		const url = `/health-tips`
		return GATEWAY_ENDPOINT.get(url)
	},
    $_fetch_health_tip_by_date: (date: string) => {
		const url = `/health-tips/by-date?date=${date}`
		return GATEWAY_ENDPOINT.get(url)
	},
    $_delete_health_tip: (id: any) => {
		const url = `/health-tips/${id}`
		return GATEWAY_ENDPOINT.delete(url)
	}
}
