import { axiosGet, axiosPost } from './helpers'
import { baseUrl } from './config'

export function homeApi(param){
    return axiosPost(`${baseUrl}/api/client/users`,param)
}
export function auth(){
    return axiosGet(`${baseUrl}/auth`)
}