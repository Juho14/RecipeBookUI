import {
  CookingUnits,
  type CookingUnit
} from '../../constants/Recipes/cookingUnit'
import { cookingUnitToString } from './cookingUnitConversions'

const TBSP_TO_ML = 15
const TSP_TO_ML = 5
const DL_TO_ML = 100
const L_TO_ML = 1000

export function unitToGrams(grams: number, cookingUnit: CookingUnit): number {
  let result: number

  switch (cookingUnit) {
    case CookingUnits.GRAM:
    case CookingUnits.MILLILITER:
      result = grams
      break
    case CookingUnits.TABLESPOON:
      result = grams * TBSP_TO_ML
      break
    case CookingUnits.TEASPOON:
      result = grams * TSP_TO_ML
      break
    case CookingUnits.DECILITER:
      result = grams * DL_TO_ML
      break
    case CookingUnits.LITER:
      result = grams * L_TO_ML
      break
    default:
      throw new Error('Not a volume unit')
  }
  return Math.round(result)
}

export function gramsToUnit(amount: number, cookingUnit: CookingUnit): number {
  let result: number

  switch (cookingUnit) {
    case CookingUnits.GRAM:
    case CookingUnits.MILLILITER:
      result = amount
      break
    case CookingUnits.TABLESPOON:
      result = amount / TBSP_TO_ML
      break
    case CookingUnits.TEASPOON:
      result = amount / TSP_TO_ML
      break
    case CookingUnits.DECILITER:
      result = amount / DL_TO_ML
      break
    case CookingUnits.LITER:
      result = amount / L_TO_ML
      break
    default:
      result = amount
  }
  return Math.round(result)
}
