import { all, fork } from 'redux-saga/effects'
import * as sagas from './index'

export default function* rootSaga() {
  yield all(
    Object.values(sagas).map(fork)
  )
}