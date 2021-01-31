import { Reducer } from 'redux'

import { IToken } from '~/@types/application/TokenApplication.types'
import {
  IAuthState,
  EAuthTypes,
  IAuthEmailRequest,
} from '~/store/Auth/AuthTypes'

export const AUTH_INITIAL_STATE: IAuthState = {
  success: false,
  failure: null,
  signInUserSession: null,
}

const AuthReducer: Reducer<IAuthState> = (
  state = AUTH_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case EAuthTypes.AUTH_SUCCESS: {
      const { signInUserSession } = action?.payload

      return {
        ...state,
        signInUserSession,
      }
    }

    case EAuthTypes.AUTH_FAILURE: {
      const { failure } = action?.payload

      return {
        ...state,
        failure,
      }
    }

    default: {
      return state
    }
  }
}

export const authFailure = (failure: string) => ({
  type: EAuthTypes.AUTH_FAILURE,
  payload: { failure },
})

export const authSuccess = (signInUserSession: IToken) => ({
  type: EAuthTypes.AUTH_SUCCESS,
  payload: { signInUserSession },
})

export const authEmailRequest = (emailRequest: IAuthEmailRequest) => ({
  type: EAuthTypes.AUTH_EMAIL_REQUEST,
  payload: { ...emailRequest },
})

export default AuthReducer
