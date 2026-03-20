import type { CookingUnit } from '../../constants/Recipes/cookingUnit'
import type { Recipe } from '../Recipe/Recipe'
import type { IngredientsForRecipeDTO } from '../Recipe/RecipeIngredient'

export type ManualIngredient = {
  id: number
  grams: number
  unit: CookingUnit,
  recipeId?: number
}

export type ManualItems = {
  name: string
  amount: number
  unit: string
}

export type ShoppingListForm = {
  date: Date
  selectedRecipies: Recipe[]
  selectedIngredients: ManualIngredient[]
  recipeIngredients: IngredientsForRecipeDTO[] 
  manualItems: ManualItems[]
}
