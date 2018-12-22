import {store} from '@cli-assistant/fw-core'
import axios, {AxiosRequestConfig} from 'axios'

async function query(type: string, endpoint: string, data?: AxiosRequestConfig) {
  return axios.request({
    method: type,
    url: `https://a.wunderlist.com/api/v1${endpoint}`,
    headers: {
      'X-Access-Token': store.get('wd_access_token'),
      'X-Client-ID': store.get('wd_client_id')
    },
    ...data
  })
}

export const get = async function (endpoint: string, data?: AxiosRequestConfig) {
  return query('get', endpoint, data)
}

export const post = async function (endpoint: string, data?: AxiosRequestConfig) {
  return query('post', endpoint, data)
}
