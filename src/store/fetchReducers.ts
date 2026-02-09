import { call, put, select, takeLatest } from 'redux-saga/effects'
import type { RootState } from '.'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface AsyncState<T> {
  data: T
  status: 'idle' | 'loading' | 'loaded' | 'error'
  error?: string
}

export function createAsyncSlice<T>({
  name,
  apiCall,
  initialData
}: {
  name: string
  apiCall: () => Promise<T>
  initialData: T
}) {
  const initialState: AsyncState<T> = {
    data: initialData,
    status: 'idle',
    error: undefined
  }

  const slice = createSlice({
    name,
    initialState,
    reducers: {
      request: (state) => {
        state.status = 'loading'
        state.error = undefined
      },
      success: (state, action: PayloadAction<T>) => {
        state.data = action.payload as typeof state.data
        state.status = 'loaded'
      },
      failure: (state, action: PayloadAction<string>) => {
        state.status = 'error'
        state.error = action.payload
      }
    }
  })

  function* saga() {
    const sliceState: AsyncState<T> = yield select(
      (state: RootState) => (state as any)[name] as AsyncState<T>
    )

    if (sliceState.status === 'loading' || sliceState.status === 'loaded')
      return

    try {
      yield put(slice.actions.request())
      const data: T = yield call(apiCall)
      yield put(slice.actions.success(data))
    } catch {
      yield put(slice.actions.failure('Failed to fetch data'))
    }
  }

  function* watch() {
    yield takeLatest(slice.actions.request.type, saga)
  }

  return { slice, saga: watch }
}
