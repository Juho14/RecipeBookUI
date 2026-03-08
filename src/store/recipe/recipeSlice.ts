import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Recipe } from '../../types/Recipe/Recipe'

interface RecipeState {
  data: Recipe[]
  status: 'idle'
  error: undefined
  activeRecipe: Recipe | null
}

export const recipeInitialState: RecipeState = {
  data: [],
  status: 'idle',
  error: undefined,
  activeRecipe: null
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: recipeInitialState,
  reducers: {
    getRecipes: () => {},
    getRecipesSuccess: (state, action: PayloadAction<Recipe[]>) => {
      state.data = action.payload
    },
    addRecipeSuccess: (state, action: PayloadAction<Recipe>) => {
      state.data.push(action.payload)
    },
    getRecipeDetailsSuccess: (state, action: PayloadAction<Recipe>) => {
      state.activeRecipe = action.payload
    },
    setActiveRecipe: (state, action: PayloadAction<Recipe>) => {
      state.activeRecipe = action.payload
    },
    clearActiveRecipe: (state) => {
      state.activeRecipe = null
    }
  }
})

export const {
  getRecipes,
  getRecipesSuccess,
  addRecipeSuccess,
  getRecipeDetailsSuccess,
  setActiveRecipe,
  clearActiveRecipe
} = recipeSlice.actions
export default recipeSlice.reducer
