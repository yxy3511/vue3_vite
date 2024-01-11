import { useAuthStore } from '@/stores'
import dayjs from 'dayjs'
import { message } from 'ant-design-vue'
// import api from '@/api/common.js'

export const commonVars = {
  logobarHeight: 64,
  crumbsHeight: 99,
  tabsbarHeight: 50,
  paginationHeight: 64,
  localeHeight: 79,
  scrollxHeight: 15,
  paddingBottom: 13, //.scroll-div padding-bottom
  total: 374 // 262
  // collapsedtMenuHeight: 576,
  // defaultMenuHeight: 468,
  // menuliHeight: 100
}


export const toLoginpage = function () {
  // to Login page
}

export const defaultPage = function () {
  return {
    current: 1,
    pageSize: 10,
    total: 0,
    hideOnSinglePage: true,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ['5', '10', '15', '20']
  }
}

export const addTableOps = function (perms, callback, columns, width=170) {
  callback = callback || function(){
    columns.push({
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: width+'px'
    })
  }
  if (perms) {
    callback()
  }
}

export const commonConfirm = function (self, option = {}, success, error) {
  const urlstr = self.$router.options.history.base + self.$route.path
  const pagename = urlstr.replace(/\/+/g, '').replace(/module|deviceabout|dataCenter/g, '')
  // 默认删除确认框
  self.$confirm({
    width: 256,
    content: option.title || '是否确定删除',
    okType: option.okType || 'danger',
    cancelText: option.cancelText || '取消',
    okText: option.okText || '确定',
    onOk () {
      success && success()
    },
    onCancel () {
      error && error()
    }
  })
}

const removeSpecialCharacters = (value) => {
  // 去掉特殊字符
  // return value.replace(/[!！#$%^&*{}「」：'[\]【】（）="‘’”“<>《》?？。，;；、]/, '')
  return value.replace(/[#$%^&*]/, '')
}

const trimStartSpaceFunc = (value) => {
  // 去掉头部空格
  return  value.replace(/^(\s+)(\S+\s*)?/, '$2')
}

export const trimSpecialStr = (value) => {
  // input框
  let str = removeSpecialCharacters(trimStartSpaceFunc(value))
  return str
}

export const setUploadHeader = () => {
  const store = useAuthStore()
  return {
    moduleCode: process.env.VUE_APP_NODE_ENV !== 'development' ? store.pagecode : 'test'
  }
}

export const toDownload = function (content, filename) {
  window.URL = window.URL || window.webkitURL
  let a = document.createElement('a')
  let blob = new Blob([content])
  // 通过二进制文件创建url
  let url = window.URL.createObjectURL(blob)
  a.href = url
  a.download = filename
  a.click()
  // 销毁创建的url
  window.URL.revokeObjectURL(url)
}

export const fileAjax = function(url, callback, options) {
  let xhr = new XMLHttpRequest()
  xhr.open('get', url, true)
  if (options.responseType) {
    xhr.responseType = options.responseType
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr)
    } else if (xhr.readyState === 4 && xhr.status === 404) {
      message.warning('文件不存在！')
    } else if (xhr.readyState === 4) {
      message.warning('下载失败！')
    }
  }
  xhr.send()
}

export const downloadFile = (url, name) => {
  fileAjax(url, function(xhr) {
    toDownload(xhr.response, name)
  }, {
    responseType: 'blob'
  })
}
