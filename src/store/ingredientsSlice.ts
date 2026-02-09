import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Ingredient } from '../types/ingredients/Ingredient'

const ingredientSlice = createSlice({
  name: 'ingredientsSync',
  initialState: {
    data: [] as Ingredient[],
    status: 'idle',
    error: undefined
  },
  reducers: {
    addIngredient: (state, action: PayloadAction<Ingredient>) => {
      state.data.push(action.payload)
    },
    getIngredients: () => {},
    getIngredientsSuccess: (state, action: PayloadAction<Ingredient []>) => {
      state.data = action.payload
    }
  }
})

export const ingredientReducer = ingredientSlice.reducer


export const {
  addIngredient,
  getIngredients,
  getIngredientsSuccess
} = ingredientSlice.actions

export default ingredientSlice.reducer
