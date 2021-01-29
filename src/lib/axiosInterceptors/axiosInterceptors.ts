import Config from 'react-native-config'

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { store } from '~/store/StoreConfig'
export const DEFAULT_TIMEOUT = 80000
export function applyAxiosInterceptors() {
  axios.interceptors.request.use(request => ({
    ...request,
    data: getData(request),
    headers: getHeaders(request),
    timeout: getTimeout(request),
  }))
  axios.interceptors.response.use(
    response => ({
      ...response,
      data: getData(response),
      headers: getHeaders(response),
      config: {
        ...response.config,
        timeout: getTimeout(response),
      },
    }),
    error => {
      error.custom = {
        code: '-999',
        message: 'Servidor com indisponibilidade. Tente novamente mais tarde.',
      }
      if (error?.response?.data?.errors[0]) {
        error.custom = {
          code: error.response.status,
          message: error.response.data.errors[0],
        }
      } else if (error?.response?.data) {
        error.custom = {
          code: error.response.status,
          message: error.response.data.message,
        }
      }
      return Promise.reject(error)
    },
  )
}
export function getHeaders(
  requestOrResponse: AxiosRequestConfig | AxiosResponse,
): AxiosRequestConfig['headers'] | AxiosResponse['headers'] {
  const { token } = store.getState().token
  const headers: typeof requestOrResponse.headers = {
    ...requestOrResponse.headers,
  }
  headers['Content-Type'] =
    Config.DESC === 'dev' ? headers['Content-Type'] : 'application/json'
  if (token) {
    headers.Authorization = `Bearer ${token?.accessToken}`
  }
  return headers
}
export function getError(error: Error) {
  return error
}
export function getData(
  requestOrResponse: AxiosRequestConfig | AxiosResponse,
): any {
  const { data } = requestOrResponse
  if (Config.DESC === 'dev') {
    return data
  }
  if (isRequest(requestOrResponse)) {
    return data
  }
  return data
}
export function getTimeout(requestOrResponse: any): number {
  const timeout: number = isRequest(requestOrResponse)
    ? requestOrResponse.timeout
    : requestOrResponse.config.timeout
  return timeout > 0 ? timeout : DEFAULT_TIMEOUT
}
export function isRequest(requestOrResponse: any): boolean {
  return typeof requestOrResponse.config !== 'object'
}
