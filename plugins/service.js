import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json;'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

let service = axios.create({
  baseURL: '//localhost:8080',
  timeout: 10000
})

// 请求拦截
service.interceptors.request.use((config) => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use((res) => {
  return res
})

export default service