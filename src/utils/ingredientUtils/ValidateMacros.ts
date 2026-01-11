import type { Macros } from '../../types/ingredients/Macros'

const proteinKcalPerGram = 4
const carbKckalPerGram = 4
const fatKcalPerGram = 9

export function validateMacros(macros: Macros) {
  const kcalFromMacros =
    macros.protein * proteinKcalPerGram +
    macros.carbs.total * carbKckalPerGram +
    macros.fats.total * fatKcalPerGram

  if (isNaN(kcalFromMacros)) return false
  const diff = Math.abs(kcalFromMacros - macros.kcal)
  return diff > 35 ? false : true
}
