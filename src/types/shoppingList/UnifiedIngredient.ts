export type UnifiedIngredient = {
  ingredientId: number
  amount: number
  unit: string

  source:
    | { type: 'recipe'; recipeId: number; recipeName: string }
    | { type: 'manual' }
}
