import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    baseURL: 'http://api.tianapi.com',
    // baseURL: 'https://c.m.163.com',
    // ncov: '/ncov/index'
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }), err => {
    console.log(err);
  }
  // 响应拦截
  instance.interceptors.response.use(config => {
    return config
  }), err => {
    console.log(err);
  }
  //发送请求
  return instance(config)
}