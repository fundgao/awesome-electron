import { HttpClient } from './app/http-client'
import { App } from './app/App'

function handleError(_data: any) {
  return null
}

const httpClient = new HttpClient({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
})

httpClient.instance.interceptors.request.use(async (request) => {
  const h5Token = (request as any).h5Token
  request.headers.Authorization = `Bearer ${h5Token}`
  request.headers['accept-language'] = 'en'
  return request
})

httpClient.instance.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data?.code !== 0) {
      return handleError(data)
    }
    return data || null
  },
  (error) => {
    if (error.response?.status === 401) {
      return null
    }
    return Promise.reject(error.response)
  },
)
export const AppRequest = new App(httpClient as any)
