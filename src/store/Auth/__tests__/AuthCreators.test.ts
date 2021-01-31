import { IToken } from '~/@types/application/TokenApplication.types'
import {
  IAuthDocumentRequest,
  IAuthEmailRequest,
  IAuthPhoneRequest,
} from '~/services/Auth/AuthService.types'
import AuthReducer, {
  authFailure,
  authSuccess,
  AUTH_INITIAL_STATE,
  authPhoneRequest,
  authEmailRequest,
  authDocumentRequest,
} from '~/store/Auth/AuthCreators'
import { EAuthTypes } from '~/store/Auth/AuthTypes'

describe('Auth creators', () => {
  describe('Reducer', () => {
    it('should set token in state when authSuccess is called', () => {
      const state = AUTH_INITIAL_STATE

      const token: IToken = {
        id: 'any_id_token',
        accessToken: 'fsbuyvfcjuxfrx567id76c8oaruc7b9boarync8aybrco8ary8a',
        expiresIn: 3600,
      }

      const expectedState = {
        ...state,
        token,
      }

      const action = authSuccess(token)
      expect(AuthReducer(state, action)).toEqual(expectedState)
    })

    it('should set failure message in state when authFailure is called', () => {
      const state = AUTH_INITIAL_STATE

      const failure: string = 'Any failure message'

      const expectedState = {
        ...state,
        failure,
      }

      const action = authFailure(failure)
      expect(AuthReducer(state, action)).toEqual(expectedState)
    })
  })

  describe('Actions', () => {
    it('should create an action to auth phone request', () => {
      const authPhoneRequestParams: IAuthPhoneRequest = {
        phone: '11950555676',
      }
      const action = authPhoneRequest(authPhoneRequestParams)
      const expectedAction = {
        type: EAuthTypes.AUTH_PHONE_REQUEST,
        payload: { authPhoneRequestParams },
      }
      expect(action).toEqual(expectedAction)
    })

    it('should create an action to auth email request', () => {
      const authEmailRequestParams: IAuthEmailRequest = {
        email: 'caio.lemos-sc@airliquide.com',
        password: 'Alb@123',
      }
      const action = authEmailRequest(authEmailRequestParams)
      const expectedAction = {
        type: EAuthTypes.AUTH_EMAIL_REQUEST,
        payload: { ...authEmailRequestParams },
      }

      expect(action).toEqual(expectedAction)
    })

    it('should create an action to auth document request', () => {
      const authDocumentRequestParams: IAuthDocumentRequest = {
        document: '43548278833',
        password: 'Alb@123',
      }
      const action = authDocumentRequest(authDocumentRequestParams)
      const expectedAction = {
        type: EAuthTypes.AUTH_DOCUMENT_REQUEST,
        payload: { ...authDocumentRequestParams },
      }

      expect(action).toEqual(expectedAction)
    })

    it('should create an action to auth failure', () => {
      const failure = 'Any failure message'

      const action = authFailure(failure)
      const expectedAction = {
        type: EAuthTypes.AUTH_FAILURE,
        payload: { failure },
      }

      expect(action).toEqual(expectedAction)
    })

    it('should create an action to auth success', () => {
      const token: IToken = {
        id: 'any_id_token',
        accessToken: 'fsbuyvfcjuxfrx567id76c8oaruc7b9boarync8aybrco8ary8a',
        expiresIn: 3600,
      }

      const action = authSuccess(token)
      const expectedAction = {
        type: EAuthTypes.AUTH_SUCCESS,
        payload: { token },
      }

      expect(action).toEqual(expectedAction)
    })
  })
})
