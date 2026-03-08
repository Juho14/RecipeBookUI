import {
  CookingUnits,
  type CookingUnit
} from '../../constants/Recipes/cookingUnit'
import type { Ingredient } from '../../types/ingredients/Ingredient'
import { isAutoLiquidType } from '../../types/ingredients/IngredientTypes'
import { getIngredientById } from './getIngredientById'

interface IngredientField {
  ingredient?: { id?: number }
  cookingUnit?: CookingUnit
}

interface IngredientFlags {
  isLiquid: boolean
  showAmount: boolean
}

export const getIngredientFlags = (
  ingredientField: IngredientField,
  ingredients: Ingredient[]
): IngredientFlags => {
  const ingredientId = ingredientField.ingredient?.id
  const cookingUnit = ingredientField.cookingUnit

  const selectedIngredient =
    ingredientId !== undefined
      ? getIngredientById(ingredients, ingredientId)
      : undefined

  const isLiquid = selectedIngredient
    ? isAutoLiquidType(selectedIngredient.type)
    : false

  const showAmount = isLiquid && cookingUnit !== CookingUnits.GRAM

  return { isLiquid, showAmount }
}
