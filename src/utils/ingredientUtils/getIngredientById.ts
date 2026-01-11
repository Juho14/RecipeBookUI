import { INGREDIENTS } from '../../constants/Data/Ingredients/Ingredients'
import type { Ingredient } from '../../types/ingredients/Ingredient'

export const getIngredientById = (id: number): Ingredient | undefined =>
  Object.values(INGREDIENTS).find((ing) => ing.id === id)
