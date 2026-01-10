import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Ingredient } from '../types/ingredients/Ingredient'

interface IngredientState {
  ingredients: Ingredient[]
}

const initialState: IngredientState = {
  ingredients: [],
}

const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<Ingredient>) => {
      state.ingredients.push(action.payload)
    },
  },
})

export const { addIngredient } = ingredientSlice.actions
export default ingredientSlice.reducer
