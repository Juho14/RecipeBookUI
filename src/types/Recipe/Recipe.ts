import type { Ingredient } from '../ingredients/Ingredient'

export type RecipeIngredient = {
  ingredient: Ingredient
  // represents grams, used for calculation
  amount: number
  // Displays the unit on the page. Use this to match alt amount
  // if grams isnt applicable.
  unit: string
  // Represents real world measurements ex. tablespoon
  alt_amount?: number
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
