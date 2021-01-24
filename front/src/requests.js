import axios from 'axios'
import store from './store'

const axiosInstance = axios.create({})

axiosInstance.interceptors.request.use(config => {
  const token = store.getters['auth/getToken']
  if (token) {
    console.log('here')
    config.headers['Content-Type'] = 'application/json'
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default axiosInstance
