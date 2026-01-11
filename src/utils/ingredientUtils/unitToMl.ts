import type { CookingUnit } from '../../types/ingredients/CookingUnit'

const TBSP_TO_ML = 15
const TSP_TO_ML = 5
const DL_TO_ML = 100
const L_TO_ML = 1000

export function unitToMl(amount: number, cookingUnit: CookingUnit): number {
    console.log(cookingUnit)
  switch (cookingUnit) {
    case 'ml':
      return amount
    case 'tbsp':
      return amount * TBSP_TO_ML
    case 'tsp':
      return amount * TSP_TO_ML
    case 'dl':
      return amount * DL_TO_ML
    case 'l':
      return amount * L_TO_ML
    default:
      throw new Error('Not a volume unit')
  }
}
