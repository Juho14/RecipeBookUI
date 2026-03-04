import { configureStore } from '@reduxjs/toolkit'
import langReducer from './langSlice'
import ingredientReducer from './ingredientsSlice'
import recipeNavReducer from './recipeNavSlice'
import { persistStore } from 'redux-persist'
import { persistedRecipeReducer } from './persist'

export const store = configureStore({
  reducer: {
    recipe: persistedRecipeReducer,
    lang: langReducer,
    ingredients: ingredientReducer,
    recipeNav: recipeNavReducer
  }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
