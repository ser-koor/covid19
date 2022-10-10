import requset from './base'
import axios from 'axios'

export function getNcov(params) {
  return axios.get(requset.host + requset.covInfo, {
    params
  })
  // return axios.get('http://152.136.185.210:7878/api/hy66/home/multidata')
}

export const getCity = function() {
  return axios.get('./fengxian.json')
}

export function getWorld(params) {
  return axios.get(requset.host + requset.world, {
    params
  })
  // return axios.get('http://152.136.185.210:7878/api/hy66/home/multidata')
}