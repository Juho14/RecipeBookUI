import type { CookingUnit } from '../ingredients/CookingUnit'
import type { Ingredient } from '../ingredients/Ingredient'

export type RecipeIngredient = {
  ingredient: Ingredient
  // represents grams, used for calculation
  grams: number
  // Displays the cookingUnit on the page. Use this to match alt grams
  // if grams isnt applicable.
  cookingUnit: CookingUnit
  // Represents real world measurements ex. tablespoon
  amount?: number
}

export type RecipeProcessStep = {
  en: string // Required English step
  fi?: string // Optional Finnish step
}

export type Recipe = {
  name: string
  slug: string
  imgPath?: string
  ingredients: RecipeIngredient[]
  time: string
  process: RecipeProcessStep[]
  servings: number
}
