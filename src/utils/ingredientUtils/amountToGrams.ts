import { CookingUnits } from '../../constants/Recipes/cookingUnit'
import type { Ingredient } from '../../types/ingredients/Ingredient'
import type { RecipeIngredient } from '../../types/Recipe/Recipe'
import { getIngredientById } from './getIngredientById'
import { unitToMl } from './unitToMl'

export function amountToGrams(
  ingredients: Ingredient[],
  recipeIngredient: RecipeIngredient
) {
  const { grams, amount, cookingUnit } = recipeIngredient

  const fullIngredient = getIngredientById(
    ingredients,
    recipeIngredient.ingredientId
  )

  if (cookingUnit === CookingUnits.GRAM) return grams

  if (amount === undefined || amount === null)
    throw new Error('Alt grams required for non-gram units')

  const ml = unitToMl(Number(amount), cookingUnit)

  const density = fullIngredient?.density
  if (!density) {
    throw new Error('Density required for volume units')
  }

  return ml * density
}
