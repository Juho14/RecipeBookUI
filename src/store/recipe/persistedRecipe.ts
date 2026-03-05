import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import recipeReducer, { recipeInitialState } from './recipeSlice'
import { createSerializableTransform } from '../persistTransform'

const recipePersistConfig = {
  key: 'recipe',
  storage,
  transforms: [
    createSerializableTransform<typeof recipeInitialState>([
      'data',
      'activeRecipe'
    ])
  ]
}

export const persistedRecipeReducer = persistReducer(
  recipePersistConfig,
  recipeReducer
)
