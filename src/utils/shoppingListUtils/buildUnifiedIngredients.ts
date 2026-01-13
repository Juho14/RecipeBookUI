import type { Recipe } from '../../types/Recipe/Recipe'
import type { ManualIngredient } from '../../types/shoppingList/ShoppingListForm'
import type { UnifiedIngredient } from '../../types/shoppingList/UnifiedIngredient'

const getIngredientsFromRecipes = (recipes: Recipe[]): UnifiedIngredient[] => {
  return recipes.flatMap((recipe) =>
    recipe.ingredients.map((recipeIng) => ({
      ingredientId: recipeIng.ingredient.id,
      amount: recipeIng.grams,
      unit: recipeIng.cookingUnit,
      source: {
        type: 'recipe',
        recipeId: recipe.id,
        recipeName: recipe.name
      }
    }))
  )
}

const getManualIngredients = (
  manual: ManualIngredient[]
): UnifiedIngredient[] => {
  return manual.map((ingredient) => ({
    ingredientId: ingredient.id,
    amount: ingredient.amount,
    unit: ingredient.unit,
    source: { type: 'manual' }
  }))
}

export const buildUnifiedIngredients = (
  recipes: Recipe[],
  manual: ManualIngredient[]
): UnifiedIngredient[] => {
  return [
    ...getIngredientsFromRecipes(recipes),
    ...getManualIngredients(manual)
  ]
}
