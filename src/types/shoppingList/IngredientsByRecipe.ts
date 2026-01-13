import type { UnifiedIngredient } from './UnifiedIngredient'

export type IngredientsByRecipe = {
  recipeId: number | 'manual'
  recipeName: string
  ingredients: UnifiedIngredient[]
}[]
