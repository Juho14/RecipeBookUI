import type { Ingredient } from '../../types/ingredients/Ingredient'

export const getIngredientById = (
  ingredients: Ingredient[],
  id: number
): Ingredient => {
  const ingredient = ingredients.find((ing) => ing.id === id)
  if (!ingredient) {
    throw new Error(`Ingredient with id ${id} not found`)
  }
  return ingredient
}
