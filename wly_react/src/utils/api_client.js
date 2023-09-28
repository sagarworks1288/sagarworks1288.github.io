import { axiosGet, axiosPost } from './helpers'
import { baseUrl } from './config'

const ApiClient = {}
ApiClient.homeApi = (param) => {
    return axiosPost(`${baseUrl}/api/client/users`, param)
}
ApiClient.auth = () => {
    return axiosGet(`${baseUrl}/auth`)
}
ApiClient.usersList = (param) => {
    return axiosPost(`${baseUrl}/api/client/users-list`, param)
}

export default ApiClient;