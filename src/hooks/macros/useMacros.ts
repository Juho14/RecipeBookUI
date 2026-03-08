import { useMemo } from 'react'
import type { Recipe } from '../../types/Recipe/Recipe'
import type { Macros } from '../../types/ingredients/Macros'
import { calculateMacrosPerServing } from '../../utils/nutrients/MacroCalculator'

interface UseMacrosResult {
  totalMacros: Macros
  perServingMacros: Macros
}

export const useMacros = (recipe: Recipe | null): UseMacrosResult | null => {
  return useMemo(() => {
    if (!recipe?.id) return null

    let totalMacros: Macros
    let perServingMacros: Macros

    totalMacros = recipe.macros
    perServingMacros = calculateMacrosPerServing(totalMacros, recipe)

    return { totalMacros, perServingMacros }
  }, [recipe])
}
