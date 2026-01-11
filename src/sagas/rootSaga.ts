import { all, fork } from 'redux-saga/effects'
import { watchChangeLanguageSaga } from './lang.saga'

export function* rootSaga() {
  yield all([
    fork(watchChangeLanguageSaga)
  ])
}
