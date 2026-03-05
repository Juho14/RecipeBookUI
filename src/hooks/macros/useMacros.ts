import { useMemo } from 'react'
import type { AnyRecipe, BaseRecipe } from '../../types/Recipe/Recipe'
import type { Macros } from '../../types/ingredients/Macros'
import {
  calculateMacros,
  calculateMacrosPerServing
} from '../../utils/nutrients/MacroCalculator'

interface UseMacrosResult {
  totalMacros: Macros
  perServingMacros: Macros
}

export const useMacros = (recipe: AnyRecipe | null): UseMacrosResult | null => {
  return useMemo(() => {
    if (!recipe) return null

    let totalMacros: Macros
    let perServingMacros: Macros

    if ('macros' in recipe) {
      // User-added recipe already has total macros
      totalMacros = recipe.macros
      perServingMacros = calculateMacrosPerServing(totalMacros, recipe)
    } else {
      // Base recipe, calculate from ingredients
      totalMacros = calculateMacros(recipe as BaseRecipe)
      perServingMacros = calculateMacrosPerServing(totalMacros, recipe)
    }

    return { totalMacros, perServingMacros }
  }, [recipe])
}
