export const ShoppingListItemType = {
  RecipeIngredient: 0,
  Ingredient: 1,
  Manual: 2
} as const

export type ShoppingListItemType =
  (typeof ShoppingListItemType)[keyof typeof ShoppingListItemType]


type RecipeItem = {
  itemType: typeof ShoppingListItemType.RecipeIngredient
  ingredientId: number
  amount: number
  recipeId: number
}

type IngredientItem = {
  itemType: typeof ShoppingListItemType.Ingredient
  ingredientId: number
  amount: number
  unit: string
}

type ManualItem = {
  itemType: typeof ShoppingListItemType.Manual
  name: string
  amount: number
  unit: string
}

export type ShoppingListItem = RecipeItem | IngredientItem | ManualItem


export type FlattenedShoppingList = {
  date: Date
  items: ShoppingListItem[]
}
