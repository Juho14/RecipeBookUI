import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Recipe } from '../types/Recipe/Recipe'

interface RecipeState {
  activeRecipe: Recipe | null
}

const initialState: RecipeState = {
  activeRecipe: null
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setActiveRecipe: (state, action: PayloadAction<Recipe>) => {
      state.activeRecipe = action.payload
    },
    clearActiveRecipe: (state) => {
      state.activeRecipe = null
    },
    // Actually dispatch this action to the backend
    addRecipe: (state, action: PayloadAction<Recipe>) => {}
  }
})

export const { setActiveRecipe, clearActiveRecipe, addRecipe } =
  recipeSlice.actions
export default recipeSlice.reducer
