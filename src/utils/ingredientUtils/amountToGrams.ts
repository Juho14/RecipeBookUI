import type { RecipeIngredient } from "../../types/Recipe/Recipe"
import { getIngredientById } from "./getIngredientById"
import { unitToMl } from "./unitToMl"

export function amountToGrams(recipeIngredient: RecipeIngredient) {
  const { amount, alt_amount, cookingUnit, ingredient } = recipeIngredient
  console.log(recipeIngredient)

  const fullIngredient = getIngredientById(ingredient.id)

  if (cookingUnit === 'g') return amount

  if (alt_amount === undefined || alt_amount === null)
    throw new Error('Alt amount required for non-gram units')

  const ml = unitToMl(Number(alt_amount), cookingUnit)

  const density = fullIngredient?.density
  if (!density) {
    throw new Error('Density required for volume units')
  }

  return ml * density
}
