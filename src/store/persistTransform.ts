import { createTransform, type TransformInbound } from 'redux-persist'

export const createSerializableTransform = <SliceState extends Record<string, any>>(
  keysToPersist: (keyof SliceState)[]
) =>
  createTransform<SliceState, SliceState>(
    ((inboundState: SliceState) => {
      const persistedState: Partial<SliceState> = {}

      keysToPersist.forEach((key) => {
        if (inboundState[key] !== undefined) {
          persistedState[key] = inboundState[key]
        }
      })

      return persistedState as SliceState
    }) as TransformInbound<SliceState, SliceState>,
    (outboundState: SliceState) => outboundState
  )