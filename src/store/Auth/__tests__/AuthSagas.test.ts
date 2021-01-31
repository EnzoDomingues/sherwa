import axios from 'axios'
import { runSaga } from 'redux-saga'

import {
  IAuthDocumentRequest,
  IAuthEmailRequest,
} from '~/services/Auth/AuthService.types'
import { authSuccess, authFailure } from '~/store/Auth/AuthCreators'
import {
  getAuthDocumentSaga,
  getAuthEmailSaga,
  getAuthPhoneSaga,
} from '~/store/Auth/AuthSagas'
import { EAuthTypes } from '~/store/Auth/AuthTypes'

const mockResponse = {
  auth: {
    status: 200,
    data: {
      success: true,
      data: {
        id: '525f8e75-d94e-4962-bf7b-9300eebeb944',
        accessToken:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnYiOiJEIiwiY2xpZW50aWQiOiI1MjVmOGU3NS1kOTRlLTQ5NjItYmY3Yi05MzAwZWViZWI5NDQiLCJuYmYiOjE2MDQ1MDg0NTYsImV4cCI6MTYwNDUxMjA1NiwiaWF0IjoxNjA0NTA4NDU2LCJpc3MiOiJzZWNyZXRrZXlJc3N1ZXIiLCJhdWQiOiJzZWNyZXRrZXlBdWRpZW5jZSJ9.EXpbUk2DQ9YbxFypHdeUHKHmfAZU2HDBD52L3Of3khE8a7mBDoDG3agE-xgvCrXALj2nkJXluAtM4I2K5ThBJ6B_Fw5CxRhlNhd2kv_KBmR7Mq9L7GeLXCY7c7EEeijymeMa_BFcRn7M4YaVPnJSMOT_hz3bn2s_0a0i36NjNicw81S0ZVRNFu6pbH-ugvXZj4kuUJn4JE4mLq86cKE7_DsIwzCQn71fQ2uVwqHIyWrYgx_--AKisWyK9373kbAdwWen06BQ7z8blT6E_3V-DbV1Sd79Le8n5efOMqOd9WVmwY5SW9NJbOg3bOUrVqDnr9PvNZca31SPNtPbDPmqIQ',
        expiresIn: 3600,
      },
    },
  },
}

describe('Auth Saga', () => {
  afterEach(jest.clearAllMocks)

  it(`should check get auth phone response ${EAuthTypes.AUTH_SUCCESS}`, async () => {
    const dispatch = jest.fn()
    jest.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse.auth)

    const phoneNumber: string = '11950555676'
    await runSaga({ dispatch }, getAuthPhoneSaga, {
      payload: { phoneNumber },
    }).toPromise()

    expect(dispatch).toHaveBeenCalledWith(
      authSuccess({
        id: '525f8e75-d94e-4962-bf7b-9300eebeb944',
        accessToken:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnYiOiJEIiwiY2xpZW50aWQiOiI1MjVmOGU3NS1kOTRlLTQ5NjItYmY3Yi05MzAwZWViZWI5NDQiLCJuYmYiOjE2MDQ1MDg0NTYsImV4cCI6MTYwNDUxMjA1NiwiaWF0IjoxNjA0NTA4NDU2LCJpc3MiOiJzZWNyZXRrZXlJc3N1ZXIiLCJhdWQiOiJzZWNyZXRrZXlBdWRpZW5jZSJ9.EXpbUk2DQ9YbxFypHdeUHKHmfAZU2HDBD52L3Of3khE8a7mBDoDG3agE-xgvCrXALj2nkJXluAtM4I2K5ThBJ6B_Fw5CxRhlNhd2kv_KBmR7Mq9L7GeLXCY7c7EEeijymeMa_BFcRn7M4YaVPnJSMOT_hz3bn2s_0a0i36NjNicw81S0ZVRNFu6pbH-ugvXZj4kuUJn4JE4mLq86cKE7_DsIwzCQn71fQ2uVwqHIyWrYgx_--AKisWyK9373kbAdwWen06BQ7z8blT6E_3V-DbV1Sd79Le8n5efOMqOd9WVmwY5SW9NJbOg3bOUrVqDnr9PvNZca31SPNtPbDPmqIQ',
        expiresIn: 3600,
      }),
    )
  })

  it(`should check get auth email response ${EAuthTypes.AUTH_SUCCESS}`, async () => {
    const dispatch = jest.fn()
    jest.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse.auth)

    const authEmailRequest: IAuthEmailRequest = {
      email: 'caio.lemos-sc@airliquide.com',
      password: 'Alb@123',
    }

    await runSaga({ dispatch }, getAuthEmailSaga, {
      payload: { authEmailRequest },
    }).toPromise()

    expect(dispatch).toHaveBeenCalledWith(
      authSuccess({
        id: '525f8e75-d94e-4962-bf7b-9300eebeb944',
        accessToken:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnYiOiJEIiwiY2xpZW50aWQiOiI1MjVmOGU3NS1kOTRlLTQ5NjItYmY3Yi05MzAwZWViZWI5NDQiLCJuYmYiOjE2MDQ1MDg0NTYsImV4cCI6MTYwNDUxMjA1NiwiaWF0IjoxNjA0NTA4NDU2LCJpc3MiOiJzZWNyZXRrZXlJc3N1ZXIiLCJhdWQiOiJzZWNyZXRrZXlBdWRpZW5jZSJ9.EXpbUk2DQ9YbxFypHdeUHKHmfAZU2HDBD52L3Of3khE8a7mBDoDG3agE-xgvCrXALj2nkJXluAtM4I2K5ThBJ6B_Fw5CxRhlNhd2kv_KBmR7Mq9L7GeLXCY7c7EEeijymeMa_BFcRn7M4YaVPnJSMOT_hz3bn2s_0a0i36NjNicw81S0ZVRNFu6pbH-ugvXZj4kuUJn4JE4mLq86cKE7_DsIwzCQn71fQ2uVwqHIyWrYgx_--AKisWyK9373kbAdwWen06BQ7z8blT6E_3V-DbV1Sd79Le8n5efOMqOd9WVmwY5SW9NJbOg3bOUrVqDnr9PvNZca31SPNtPbDPmqIQ',
        expiresIn: 3600,
      }),
    )
  })

  it(`should check get auth document response ${EAuthTypes.AUTH_SUCCESS}`, async () => {
    const dispatch = jest.fn()
    jest.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse.auth)

    const authDocumentRequest: IAuthDocumentRequest = {
      document: '43548278833',
      password: 'Alb@123',
    }

    await runSaga({ dispatch }, getAuthDocumentSaga, {
      payload: { authDocumentRequest },
    }).toPromise()

    expect(dispatch).toHaveBeenCalledWith(
      authSuccess({
        id: '525f8e75-d94e-4962-bf7b-9300eebeb944',
        accessToken:
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnYiOiJEIiwiY2xpZW50aWQiOiI1MjVmOGU3NS1kOTRlLTQ5NjItYmY3Yi05MzAwZWViZWI5NDQiLCJuYmYiOjE2MDQ1MDg0NTYsImV4cCI6MTYwNDUxMjA1NiwiaWF0IjoxNjA0NTA4NDU2LCJpc3MiOiJzZWNyZXRrZXlJc3N1ZXIiLCJhdWQiOiJzZWNyZXRrZXlBdWRpZW5jZSJ9.EXpbUk2DQ9YbxFypHdeUHKHmfAZU2HDBD52L3Of3khE8a7mBDoDG3agE-xgvCrXALj2nkJXluAtM4I2K5ThBJ6B_Fw5CxRhlNhd2kv_KBmR7Mq9L7GeLXCY7c7EEeijymeMa_BFcRn7M4YaVPnJSMOT_hz3bn2s_0a0i36NjNicw81S0ZVRNFu6pbH-ugvXZj4kuUJn4JE4mLq86cKE7_DsIwzCQn71fQ2uVwqHIyWrYgx_--AKisWyK9373kbAdwWen06BQ7z8blT6E_3V-DbV1Sd79Le8n5efOMqOd9WVmwY5SW9NJbOg3bOUrVqDnr9PvNZca31SPNtPbDPmqIQ',
        expiresIn: 3600,
      }),
    )
  })

  it(`should check auth phone response failure ${EAuthTypes.AUTH_FAILURE}`, async () => {
    const dispatch = jest.fn()
    jest.spyOn(axios, 'post').mockRejectedValue('error')
    const phoneNumber: string = '11950555676'
    await runSaga({ dispatch }, getAuthPhoneSaga, {
      payload: { phoneNumber },
    }).toPromise()

    expect(dispatch).toHaveBeenCalledWith(authFailure(undefined))
  })

  it(`should check auth email response failure ${EAuthTypes.AUTH_FAILURE}`, async () => {
    const dispatch = jest.fn()
    jest.spyOn(axios, 'post').mockRejectedValue(undefined)
    const authEmailRequest: IAuthEmailRequest = {
      email: 'caio.lemos-sc@airliquide.com',
      password: 'Alb@123',
    }

    await runSaga({ dispatch }, getAuthEmailSaga, {
      payload: { authEmailRequest },
    }).toPromise()

    expect(dispatch).toHaveBeenCalledWith(authFailure(undefined))
  })

  it(`should check auth document response failure ${EAuthTypes.AUTH_FAILURE}`, async () => {
    const dispatch = jest.fn()
    jest.spyOn(axios, 'post').mockRejectedValue(undefined)
    const authDocumentRequest: IAuthDocumentRequest = {
      document: '43548278833',
      password: 'Alb@123',
    }

    await runSaga({ dispatch }, getAuthDocumentSaga, {
      payload: { authDocumentRequest },
    }).toPromise()

    expect(dispatch).toHaveBeenCalledWith(authFailure(undefined))
  })
})
