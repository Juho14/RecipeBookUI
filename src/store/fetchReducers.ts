import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface AsyncState<T> {
  data: T
  status: 'idle' | 'loading' | 'loaded' | 'error'
  error?: string
}

export function createAsyncSlice<T extends object>({
  name,
  apiCall,
  initialData
}: {
  name: string
  apiCall: () => Promise<T>
  initialData: T
}) {
  const fetchThunk = createAsyncThunk<
    T,
    void,
    { state: RootState; rejectValue: string }
  >(
    `${name}/fetch`,
    async (_, { rejectWithValue }) => {
      try {
        return await apiCall()
      } catch (error: any) {
        console.error(`Error fetching ${name}:`, error)
        return rejectWithValue('Failed to fetch data')
      }
    },
    {
      condition: (_, { getState }) => {
        const state = getState()
        const sliceState = state[name as keyof RootState] as AsyncState<T>

        if (sliceState.status === 'loading' || sliceState.status === 'loaded') {
          return false
        }

        return true
      }
    }
  )

  const initialState: AsyncState<T> = {
    data: initialData,
    status: 'idle'
  }

  const slice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchThunk.pending, (state) => {
          state.status = 'loading'
          state.error = undefined
        })
        .addCase(fetchThunk.fulfilled, (state, action) => {
          return {
            ...state,
            data: action.payload,
            status: 'loaded'
          }
        })
        .addCase(fetchThunk.rejected, (state, action) => {
          state.status = 'error'
          state.error = action.payload ?? 'Failed to fetch data'
        })
    }
  })

  return { slice, fetchThunk }
}
