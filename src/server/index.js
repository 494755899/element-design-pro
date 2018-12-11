import Bus from 'src/util/buildIn/bus'
import axios from 'axios'
import axiosConfig from 'src/config/axios.js'
const instance = axios.create({
  baseURL: process.env.VUE_APP_HOST,
  timeout: 5000,
  needLoading: true,
  withCredentials: true
})

instance.interceptors.request.use(config => {
  // 把get请求和post请求存数据的地方统一
  const { method, data, action, url } = config
  if (method.toUpperCase() === 'GET') {
    config.params = data
  }
  // 对resultful中的action进行封装
  if (action) {
    const strAction = action.join('/')
    config.url = `${url}/${strAction}`
  }
  return config
})

instance.interceptors.response.use(config => {
  const { config: { message }, data } = config
  const successType = data[axiosConfig.successType]
  if (successType !== axiosConfig.successValue) {
    Bus.$emit('errorTip', config.data.message)
    return Promise.reject(config)
  }
  if (message) {
    Bus.$emit('success', message)
  }
  return config
})
export default instance
