import type { IngredientsByRecipe } from '../../types/shoppingList/IngredientsByRecipe'
import type { UnifiedIngredient } from '../../types/shoppingList/UnifiedIngredient'

export const groupIngByRecipe = (
  ingredients: UnifiedIngredient[]
): IngredientsByRecipe => {
  const recipeMap = new Map<number, IngredientsByRecipe[0]>()
  const manualIngredients: UnifiedIngredient[] = []

  for (const ingredient of ingredients) {
    if (ingredient.source.type === 'manual') {
      manualIngredients.push(ingredient)
      continue
    }

    const { recipeId, recipeName } = ingredient.source

    if (!recipeMap.has(recipeId)) {
      recipeMap.set(recipeId, {
        recipeId,
        recipeName,
        ingredients: []
      })
    }

    recipeMap.get(recipeId)!.ingredients.push(ingredient)
  }

  const result = Array.from(recipeMap.values())

  if (manualIngredients.length) {
    result.push({
      recipeId: 'manual',
      recipeName: 'Manually added',
      ingredients: manualIngredients
    })
  }

  return result
}
