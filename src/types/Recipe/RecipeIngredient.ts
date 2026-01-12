import type { Ingredient } from '../ingredients/Ingredient'

export type RecipeIngredient = {
  ingredient: Ingredient
  grams: number
  amount: string
}
