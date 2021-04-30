import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

let service = axios.create({
  baseURL: '//localhost:8080',
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
      return res.data
    } else {
      return res.data
    }
  } else {
    return { code: 40004, message: '发生未知错误' }
  }
})

export default service