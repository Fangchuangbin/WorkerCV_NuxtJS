import request from '@/plugins/service'

// 登录
export const userLogin = (data) => {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: data
  })
}

// 注册
export const userRegister = (data) => {
  return request({
    url: '/api/user/register',
    method: 'post',
    data: data
  })
}

// export function getUser (params) {
//   return request({
//     url: '/user/getUser',
//     method: 'get',
//     params: params
//   })
// }