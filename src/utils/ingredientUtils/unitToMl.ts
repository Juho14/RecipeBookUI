import type { CookingUnit } from '../../types/ingredients/CookingUnit'

const TBSP_TO_ML = 15
const TSP_TO_ML = 5
const DL_TO_ML = 100
const L_TO_ML = 1000

export function unitToMl(grams: number, cookingUnit: CookingUnit): number {
    console.log(cookingUnit)
  switch (cookingUnit) {
    case 'ml':
      return grams
    case 'tbsp':
      return grams * TBSP_TO_ML
    case 'tsp':
      return grams * TSP_TO_ML
    case 'dl':
      return grams * DL_TO_ML
    case 'l':
      return grams * L_TO_ML
    default:
      throw new Error('Not a volume unit')
  }
}
