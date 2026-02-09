import { call, put, select } from 'redux-saga/effects'
import type { RootState } from '../store'

interface FetchPipelineOptions<T> {
  selectStatus: (state: RootState) => string
  requestAction: () => any
  successAction: (payload: T) => any
  failureAction?: (error: string) => any
  apiCall: () => Promise<T>
}

export function* fetchPipeline<T>({
  selectStatus,
  requestAction,
  successAction,
  failureAction,
  apiCall
}: FetchPipelineOptions<T>) {
  const status: string = yield select(selectStatus)

  if (status === 'loading' || status === 'loaded') return

  try {
    yield put(requestAction())
    const result: T = yield call(apiCall)
    yield put(successAction(result))
  } catch (err) {
    if (failureAction) yield put(failureAction('Failed to load data'))
  }
}
