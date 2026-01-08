import type { Ingredient } from '../ingredients/Ingredient'

export type RecipeIngredient = {
  ingredient: Ingredient
  amount: number
  alt_amount: string
}
