import axios from 'axios'
import { useAuthStore } from '@/store'
import { message } from 'ant-design-vue'
import { toLoginpage, sendlog } from './common'

const store = useAuthStore()

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api的base_url
  timeout: 20000, // 请求超时时间
  withCredentials: true
})

service.interceptors.request.use(config => {
  config.baseURL = config.host || config.baseURL
  config.headers['Content-type'] = 'application/json'
  config.headers.moduleCode = process.env.VUE_APP_NODE_ENV !== 'development' ? store.getters.pagecode : 'test'

  return config
}, error => {
  return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    if ((response.data.code === 10002 || response.data.code === 30002) && process.env.VUE_APP_NODE_ENV !== 'development') {
      toLoginpage()
    } else if (response.data.code === 10003) {
      message.destroy()
      message.warning('用户未注册，请联系管理人员')
    } else if (response.data.code !== 0) {
      message.destroy()
      message.warning(response.data.description)
    }
    store.commit('unregistered', response.data.code === 10003)
    return response.data
  },
  error => {
    console.log(error)
    sendlog([{
      eventkey: 'ERROR',
      eventtype: 'PROMISE',
      info: {
        url: error.request.responseURL,
        code: error.request.status,
        message: error.request.statusText
      }
    }])
    message.destroy()
    message.warning('服务错误')
  }
)

export default service
