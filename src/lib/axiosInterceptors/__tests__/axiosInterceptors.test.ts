import { AxiosRequestConfig, AxiosResponse } from 'axios'

import {
  getHeaders,
  getData,
  isRequest,
  getTimeout,
  DEFAULT_TIMEOUT,
} from '~/lib/axiosInterceptors/axiosInterceptors'

jest.mock('react-native-config', () => ({
  TYPE: 'PRODUCTION',
  VERSION_CODE: '1',
  VERSION_NAME: '1.0.0',
}))

let timeout = 100

function getAxiosMocks(): {
  request: AxiosRequestConfig
  response: AxiosResponse
} {
  return {
    request: {
      data: { foo: 'bar ' },
      timeout,
    },

    response: {
      data: { foo: 'bar ' },
      status: 200,
      statusText: 'OK',
      config: {
        timeout,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    },
  }
}

describe('Axios interceptors lib', () => {
  describe('getHeaders', () => {
    describe('prod/homolog', () => {
      it('should return application/json content-type', () => {
        const request: AxiosRequestConfig = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        const expectedHeaders = {
          'Content-Type': 'application/json',
        }

        expect(getHeaders(request)).toEqual(expectedHeaders)
      })
    })
  })

  describe('getData', () => {
    describe('prod/homolog', () => {
      it('should return encrypted data if is request', () => {
        const request: AxiosRequestConfig = {
          data: { foo: 'bar ' },
        }

        expect(getData(request)).toEqual(request?.data)
      })

      it('should return decrypted data if is response', () => {
        const response: AxiosResponse = {
          data: { foo: 'bar ' },
          config: {},
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'application/json',
          },
        }

        expect(getData(response)).toEqual(response.data)
      })
    })
  })

  describe('getTimeout', () => {
    it('should return passed timeout if greater than 0', () => {
      const { request, response } = getAxiosMocks()
      expect(getTimeout(request)).toBe(timeout)
      expect(getTimeout(response)).toBe(timeout)
    })

    it('should return default timeout if passed timeout is equal 0', () => {
      timeout = 0
      const { request, response } = getAxiosMocks()
      expect(getTimeout(request)).toBe(DEFAULT_TIMEOUT)
      expect(getTimeout(response)).toBe(DEFAULT_TIMEOUT)
    })
  })

  describe('isRequest', () => {
    it('should check if object is axios request', () => {
      const { request, response } = getAxiosMocks()
      expect(isRequest(request)).toBeTruthy()
      expect(isRequest(response)).toBeFalsy()
    })
  })
})
