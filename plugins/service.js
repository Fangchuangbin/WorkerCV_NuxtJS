import axios from 'axios'

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'text/plain;charset=UTF-8'

let service = axios.create({
  baseURL: 'http://192.168.0.5:7001',
  timeout: 10000
})

// 请求拦截
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(res => {
  if(res.status == 200) {
    if(res.data.code !== 20000) {
      return { code: res.data.code, message: res.data.message }
    } else {
      return res.data
    }
  } else {
    return { code: 40004, message: '发生未知错误，请重试！' }
  }
})

export default service