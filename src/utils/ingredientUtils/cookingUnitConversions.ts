import {
  CookingUnits,
  type CookingUnit
} from '../../constants/Recipes/cookingUnit'
import type { UnifiedIngredient } from '../../types/shoppingList/UnifiedIngredient'
import { gramsToUnit } from './unitToMl'

const VOLUME_THRESHOLD_L = 1000 // 1000 mL = 1 L

export const cookingUnitToString = (unit: CookingUnit): string => {
  switch (unit) {
    case CookingUnits.GRAM:
      return 'g'
    case CookingUnits.MILLILITER:
      return 'ml'
    case CookingUnits.TABLESPOON:
      return 'tbspn'
    case CookingUnits.TEASPOON:
      return 'tspn'
    case CookingUnits.DECILITER:
      return 'dl'
    case CookingUnits.LITER:
      return 'l'
    default:
      return 'g' // default unit when none is chosen
  }
}

export const convertCookingUnit = (unit: CookingUnit | string): string => {
  if (typeof unit === 'string') return unit
  return cookingUnitToString(unit)
}

interface AmountWithUnit {
  amount: number
  unit: CookingUnit | string
}

export const getOptimalCookingUnit = (
  props: AmountWithUnit
): AmountWithUnit => {
  const { amount, unit } = props
  if (unit === CookingUnits.GRAM) {
    return { amount: Math.round(amount), unit: CookingUnits.GRAM }
  }

  // Volume units
  if (amount < VOLUME_THRESHOLD_L) {
    return { amount: Math.round(amount), unit: CookingUnits.MILLILITER }
  } else {
    const liters = Math.round((amount / 1000) * 10) / 10 // 1 decimal place
    return { amount: liters, unit: CookingUnits.LITER }
  }
}

export const getGroupedOptimalCookingUnit = (
  ingredients: UnifiedIngredient[],
  unit: CookingUnit
): AmountWithUnit => {
  const totalAmount = ingredients.reduce(
    (grams, ingredient) => grams + ingredient.grams,
    0
  )
  return getOptimalCookingUnit({ amount: totalAmount, unit })
}

const calculateTotalAmount = (item: UnifiedIngredient) => {
  if (typeof item.unit === 'string') return item.amount!
  return gramsToUnit(item.amount ?? item.grams!, item.unit)
}

export const getTotalAmountWithUnit = (
  items: UnifiedIngredient[]
): AmountWithUnit => {
  if (items.length === 0) {
    return { amount: 0, unit: CookingUnits.GRAM } // default fallback
  }

  const firstUnit = items[0]?.unit
  // Sum total amount first
  const totalAmount = items.reduce(
    (sum, item) => sum + calculateTotalAmount(item),
    0
  )

  if (typeof firstUnit === 'string') {
    return { amount: totalAmount, unit: firstUnit }
  }

  // Always normalize to CookingUnit
  if (!firstUnit) {
    // fallback if conversion fails
    return { amount: totalAmount, unit: CookingUnits.GRAM }
  }

  // Now compute optimal unit for display
  const unitResult = getGroupedOptimalCookingUnit(items, firstUnit)

  return unitResult
}
