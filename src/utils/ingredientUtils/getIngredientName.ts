import { INGREDIENTS_BY_ID } from "../../constants/Data/Ingredients/Ingredients"

export const getIngredientName = (id: number): string => {
  const ingredient = INGREDIENTS_BY_ID[id]
  return ingredient ? ingredient.name : `ID ${id}`
}