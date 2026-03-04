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
    addIngredientSuccess: (state, action: PayloadAction<Ingredient>) => {
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
  addIngredientSuccess,
  getIngredients,
  getIngredientsSuccess
} = ingredientSlice.actions

export default ingredientSlice.reducer
