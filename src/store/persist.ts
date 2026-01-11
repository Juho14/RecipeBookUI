import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import recipeReducer from './recipeSlice'

export const recipePersistConfig = {
  key: 'recipe',
  storage,
  whitelist: ['activeRecipe']
}

export const persistedRecipeReducer = persistReducer(
  recipePersistConfig,
  recipeReducer
)
