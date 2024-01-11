import request from '@/assets/utils/request'
export default {
  tologin(data) {
    return request({
      url: '/oauthunified/login',
      method: 'get',
      params: data
    })
  },
  tologout(data) {
    return request({
      url: '/oauthunified/logout',
      method: 'get',
      params: data
    })
  },
  sysout(data, host) {
    return request({
      url: '/logout',
      method: 'get',
      host: host,
      params: data
    })
  }
}
