import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../store'

export interface FetchPipelineOptions<T, Arg = void> {
  selectStatus: (state: RootState) => string
  requestAction?: () => void | any
  successAction?: SuccessAction<T>
  failureAction?: (error: string) => void
  apiCall: (arg: Arg) => Promise<T>
}

type SuccessAction<T> = (payload: T, dispatch: AppDispatch) => void

export function createFetchPipelineThunk<T, Arg = void>(
  options: FetchPipelineOptions<T, Arg>
) {
  const { selectStatus, requestAction, successAction, failureAction, apiCall } =
    options

  return createAsyncThunk<
    T,
    Arg,
    {
      state: RootState
      dispatch: AppDispatch
      rejectValue: string
    }
  >(
    'fetch/pipeline',
    async (arg, { rejectWithValue, dispatch }) => {
      try {
        const result = await apiCall(arg)

        // Call the success callback AFTER fetch
        if (successAction) successAction(result, dispatch)

        return result
      } catch {
        const message = 'Failed to load data'
        if (failureAction) failureAction(message)
        return rejectWithValue(message)
      }
    },
    {
      condition: (_, { getState }) => {
        const state = getState()
        const status = selectStatus(state)
        return !(status === 'loading' || status === 'loaded')
      }
    }
  )
}
