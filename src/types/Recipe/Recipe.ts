import type { CookingUnit } from '../../constants/Recipes/cookingUnit'
import type { Macros } from '../ingredients/Macros'

export type RecipeIngredient = {
  name: string
  ingredientId: number
  // represents grams, used for calculation
  grams: number
  // Displays the cookingUnit on the page. Use this to match alt grams
  // if grams isnt applicable.
  cookingUnit: CookingUnit
  // Represents real world measurements ex. tablespoon
  amount?: number
}

export type FormRecipeIngredient = {
  name: string
  ingredientId?: number
  // represents grams, used for calculation
  grams: number
  // Displays the cookingUnit on the page. Use this to match alt grams
  // if grams isnt applicable.
  cookingUnit: CookingUnit
  // Represents real world measurements ex. tablespoon
  amount?: number
}

export type RecipeProcessStep = {
  description: string // Required English step
  descriptionFi?: string // Optional Finnish step
}

export type Recipe = {
  id: number
  category: string
  name: string
  slug: string
  imgPath?: string
  ingredients: RecipeIngredient[]
  duration: string
  steps: RecipeProcessStep[]
  servings: number
  macros: Macros
}

export type RecipeCategory = {
  id: number
  name: string
}
export type GroupedRecipes = {
  category: RecipeCategory
  recipes: Recipe[]
}
