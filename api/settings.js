import request from '@/plugins/service'

// 获取头部信息
export const getHead = () => {
  return request({
    url: '/head',
    method: 'get'
  })
}

// 登录
// export function login (data) {
//   return request({
//     url: '/user/login',
//     method: 'post',
//     data: data
//   })
// }

// export function getUser (params) {
//   return request({
//     url: '/user/getUser',
//     method: 'get',
//     params: params
//   })
// }