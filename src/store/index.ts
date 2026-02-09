import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import langReducer from './langSlice'
import ingredientReducer from './ingredientsSlice'
import { persistStore } from 'redux-persist'
import { persistedRecipeReducer } from './persist'
import rootSaga from '../sagas/rootSaga'

let sagaStarted = false

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    recipe: persistedRecipeReducer,
    lang: langReducer,
    ingredients: ingredientReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false
    }).concat(sagaMiddleware)
})

if (!sagaStarted) {
  sagaStarted = true
  sagaMiddleware.run(rootSaga)
}

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
