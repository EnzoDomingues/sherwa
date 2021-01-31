import { Auth } from 'aws-amplify'
import { takeLatest, put, call } from 'redux-saga/effects'

import { authSuccess, authFailure } from '~/store/Auth/AuthCreators'
import { EAuthTypes, IAuthState } from '~/store/Auth/AuthTypes'

export function* getAuthEmailSaga(action) {
  try {
    const response: IAuthState = yield call([Auth, 'signIn'], action.payload)
    console.log(response)

    yield put(authSuccess(response.signInUserSession))
  } catch (error) {
    console.log(error)
    yield put(authFailure(error))
  }
}

export default function* () {
  yield takeLatest(EAuthTypes.AUTH_EMAIL_REQUEST, getAuthEmailSaga)
}
