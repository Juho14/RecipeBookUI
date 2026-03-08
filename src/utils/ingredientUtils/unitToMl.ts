import { CookingUnits, type CookingUnit } from "../../constants/Recipes/cookingUnit"

const TBSP_TO_ML = 15
const TSP_TO_ML = 5
const DL_TO_ML = 100
const L_TO_ML = 1000

export function unitToMl(grams: number, cookingUnit: CookingUnit): number {
  switch (cookingUnit) {
    case CookingUnits.MILLILITER:
      return grams
    case CookingUnits.TABLESPOON:
      return grams * TBSP_TO_ML
    case CookingUnits.TEASPOON:
      return grams * TSP_TO_ML
    case CookingUnits.DECILITER:
      return grams * DL_TO_ML
    case CookingUnits.LITER:
      return grams * L_TO_ML
    default:
      throw new Error('Not a volume unit')
  }
}
