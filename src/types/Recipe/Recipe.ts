import type { CookingUnit } from '../ingredients/CookingUnit'
import type { Ingredient } from '../ingredients/Ingredient'
import type { Macros } from '../ingredients/Macros'

export type RecipeIngredient = {
  name: string
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
  description: string // Required English step
  descriptionFi?: string // Optional Finnish step
}

export type BaseRecipe = {
  name: string
  slug: string
  imgPath?: string
  ingredients: RecipeIngredient[]
  time: string
  steps: RecipeProcessStep[]
  servings: number
}

export type Recipe = {
  id: number
  name: string
  slug: string
  imgPath?: string
  ingredients: RecipeIngredient[]
  time: string
  steps: RecipeProcessStep[]
  servings: number
  macros: Macros
}

export type AnyRecipe = BaseRecipe | Recipe

export type RecipeCategory = {
  id: number
  name: string
}
export type GroupedRecipes = {
  category: RecipeCategory
  recipes: Recipe[]
}
