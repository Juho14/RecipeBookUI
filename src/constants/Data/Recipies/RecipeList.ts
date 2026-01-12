import { HOISIN_CHICKEN } from './HoisinChicken'
import { PESTO_PASTA } from './PestoPasta'
import { TEST_RECIPE } from './TestRecipe'

export const RECIPE_LIST = [HOISIN_CHICKEN, PESTO_PASTA, TEST_RECIPE]

export const RECIPE_MAP = RECIPE_LIST.reduce((acc, recipe) => {
  acc[recipe.slug] = recipe
  return acc
}, {} as Record<string, typeof HOISIN_CHICKEN>)
