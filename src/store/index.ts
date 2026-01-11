import { configureStore } from '@reduxjs/toolkit'
import langReducer from './langSlice'
import { sagaMiddleware } from './sagaMiddleware'
import { rootSaga } from '../sagas/rootSaga'
import { persistStore } from 'redux-persist'
import { persistedRecipeReducer } from './persist'

export const store = configureStore({
  reducer: {
    recipe: persistedRecipeReducer,
    lang: langReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false
    }).concat(sagaMiddleware)
})
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

// const persistedReducer = persistReducer(persistConfig, reducers);
// const store = createStoreWithMiddleware(persistedReducer, initialState);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
