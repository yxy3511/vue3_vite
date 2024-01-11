import request from '@/assets/utils/request'
export default {
  getSubComponents(data) {
    return request({
      url: '/getSubComponents',
      method: 'get',
      params: data
    })
  },
  // sidemenu
  getSideMenu(data) {
    return request({
      url: '/oauthunified/userMenulist',
      method: 'get',
      params: data
    })
  },
  getUserlist(data) {
    return request({
      url: '/oauthunified/verify/getuserlist',
      method: 'get',
      params: data
    })
  },
  getRoleList(data) {
    return request({
      url: '/oauthunified/verify/grouplist',
      method: 'get',
      params: data
    })
  },
  uploadUser(data) {
    return request({
      url: '/oauthunified/verify/updateuserinfo',
      method: 'post',
      data: data
    })
  },
  addUser(data) {
    return request({
      url: '/oauthunified/verify/adduser',
      method: 'post',
      data: data
    })
  },
  delUser(data) {
    return request({
      url: '/oauthunified/verify/updateuserstate',
      method: 'get',
      params: data
    })
  },
  search(data) {
    return request({
      url: '/oauthunified/verify/selector',
      method: 'get',
      params: data
    })
  },
  authlist(data) {
    return request({
      url: '/oauthunified/verify/userMenulist',
      method: 'get',
      params: data
    })
  },
  getUserinfo(data) {
    return request({
      url: '/oauthunified/getuserinfo',
      method: 'get',
      params: data
    })
  }
}
