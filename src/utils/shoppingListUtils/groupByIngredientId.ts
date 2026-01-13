import type { IngredientsById } from '../../types/shoppingList/IngredientsById'
import type { UnifiedIngredient } from '../../types/shoppingList/UnifiedIngredient'

export const groupByIngredientId = (
  ingredients: UnifiedIngredient[]
): IngredientsById => {
  return ingredients.reduce<IngredientsById>((acc, ingredient) => {
    const key = ingredient.ingredientId

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(ingredient)
    return acc
  }, {})
}
