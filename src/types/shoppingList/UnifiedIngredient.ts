import type { CookingUnit } from "../../constants/Recipes/cookingUnit"

export const recipeSource = (recipeId: number, recipeName: string): UnifiedIngredient["source"] => ({
  type: "recipe",
  recipeId,
  recipeName
})

export const manualSource: UnifiedIngredient["source"] = { type: "manual" }

export type UnifiedIngredient = {
  ingredientId: number
  amount?: number
  grams: number
  recipeId?: number
  unit: CookingUnit | string

  source:
    | { type: 'recipe'; recipeId: number; recipeName: string }
    | { type: 'manual' }
}
