import type { IngredientsForRecipeDTO } from '../../types/Recipe/RecipeIngredient'
import { recipeSource } from '../../types/shoppingList/UnifiedIngredient'

export const mapRecipeIngredientsToUnified = (
  ingredients: IngredientsForRecipeDTO[]
) =>
  ingredients.flatMap((ri) =>
    ri.ingredients.map((i) => ({
      ingredientId: i.ingredientId,
      name: i.name,
      grams: i.grams,
      amount: i.amount,
      unit: i.cookingUnit,
      source: recipeSource(ri.recipeId, ri.recipeName)
    }))
  )
