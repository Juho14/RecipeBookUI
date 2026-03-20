import type { IngredientsForRecipeDTO } from '../../types/Recipe/RecipeIngredient'
import type { ManualIngredient } from '../../types/shoppingList/ShoppingListForm'
import {
  manualSource,
  type UnifiedIngredient
} from '../../types/shoppingList/UnifiedIngredient'
import { mapRecipeIngredientsToUnified } from '../recipeUtils/mapRecipeIngredientsToUnified'

const getIngredientsFromRecipes = (
  ingredients: IngredientsForRecipeDTO[]
): UnifiedIngredient[] => {
  return mapRecipeIngredientsToUnified(ingredients)
}

const getManualIngredients = (
  manual: ManualIngredient[]
): UnifiedIngredient[] => {
  return manual.map((i) => ({
    ingredientId: i.id,
    grams: i.grams,
    unit: i.unit,
    source: manualSource
  }))
}

export const buildUnifiedIngredients = (
  ingredients: IngredientsForRecipeDTO[],
  manual: ManualIngredient[]
): UnifiedIngredient[] => {
  return [
    ...getIngredientsFromRecipes(ingredients),
    ...getManualIngredients(manual)
  ]
}
