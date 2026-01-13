import type { Recipe } from '../Recipe/Recipe'

export type ManualIngredient = {
  id: number
  amount: number
  unit: string
}

export type ShoppingListForm = {
  selectedRecipies: Recipe[]
  selectedIngredients: ManualIngredient[]
}
