export interface IToken {
  idToken: IAccessToken
  refreshToken: IAccessToken
  accessToken: IAccessToken
}

export interface IAccessToken {
  jwtToken: string
  token: string
}

export interface ITokenValidate {
  clientId: string
  expiresIn: number
  userId: string
  userRoles: string
}
