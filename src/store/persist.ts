import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import recipeReducer from './recipeSlice'

export const recipePersistConfig = {
  key: 'recipe',
  storage,
  whitelist: ['lastSelectedId']
}

export const persistedRecipeReducer = persistReducer(
  recipePersistConfig,
  recipeReducer
)
