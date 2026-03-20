import type { CookingUnit } from '../../constants/Recipes/cookingUnit'
import type { Ingredient } from '../ingredients/Ingredient'

export type RecipeIngredient = {
  ingredient: Ingredient
  ingredientId: number
  name: string
  grams: number
  amount: number,
  cookingUnit: CookingUnit
}

export type IngredientsForRecipeDTO = {
  recipeId: number
  recipeName: string
  ingredients: RecipeIngredient[]
}

