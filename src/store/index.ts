import { configureStore } from '@reduxjs/toolkit'
import langReducer from './langSlice'
import ingredientReducer from './ingredientsSlice'
import recipeNavReducer from './recipeNavSlice'
import { persistedRecipeReducer } from './recipe/persistedRecipe'
import { persistStore } from 'redux-persist'

export const store = configureStore({
  reducer: {
    recipe: persistedRecipeReducer,
    lang: langReducer,
    ingredients: ingredientReducer,
    recipeNav: recipeNavReducer,
  },
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch