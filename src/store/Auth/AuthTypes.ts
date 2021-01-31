import { IToken } from '~/@types/application/TokenApplication.types'

export interface IAuthState {
  success?: boolean
  failure?: string
  signInUserSession?: IToken
}

export interface IAuthEmailRequest {
  username: string
  password: string
}

export enum EAuthTypes {
  AUTH_SUCCESS = '@auth/SUCCESS',
  AUTH_FAILURE = '@auth/FAILURE',

  AUTH_PHONE_REQUEST = '@auth/PHONE_REQUEST',
  AUTH_EMAIL_REQUEST = '@auth/EMAIL_REQUEST',
  AUTH_DOCUMENT_REQUEST = '@auth/DOCUMENT_REQUEST',
}
