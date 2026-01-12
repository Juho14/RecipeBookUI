import type { RecipeIngredient } from "../../types/Recipe/Recipe"
import { getIngredientById } from "./getIngredientById"
import { unitToMl } from "./unitToMl"

export function amountToGrams(recipeIngredient: RecipeIngredient) {
  const { grams, amount, cookingUnit, ingredient } = recipeIngredient
  console.log(recipeIngredient)

  const fullIngredient = getIngredientById(ingredient.id)

  if (cookingUnit === 'g') return grams

  if (amount === undefined || amount === null)
    throw new Error('Alt grams required for non-gram units')

  const ml = unitToMl(Number(amount), cookingUnit)

  const density = fullIngredient?.density
  if (!density) {
    throw new Error('Density required for volume units')
  }

  return ml * density
}
