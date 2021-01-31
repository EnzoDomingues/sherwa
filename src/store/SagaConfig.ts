import { spawn, all, call } from 'redux-saga/effects'

import AuthSagas from '~/store/Auth/AuthSagas'

const sagas = [AuthSagas]

export default function* SagaConfig() {
  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (error) {}
        }
      }),
    ),
  )
}
