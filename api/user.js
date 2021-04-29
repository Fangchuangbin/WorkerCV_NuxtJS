import request from '@/plugins/service'

// 用户登录
export const userLogin = (data) => {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: {
      phone: "13184845054",
      password: "123456789"
    }
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