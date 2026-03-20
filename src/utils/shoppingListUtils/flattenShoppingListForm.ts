import type { ShoppingListForm } from "../../types/shoppingList/ShoppingListForm";
import { ShoppingListItemType, type FlattenedShoppingList, type ShoppingListItem } from "../../types/shoppingList/ShoppingListRequests";

export const flattenShoppingListForm = (
  form: ShoppingListForm
): FlattenedShoppingList => {
  const items: ShoppingListItem[] = []

  form.recipeIngredients.forEach((recipe) => {
    recipe.ingredients.forEach((i) => {
      items.push({
        itemType: ShoppingListItemType.RecipeIngredient,
        ingredientId: i.ingredientId,
        amount: i.amount ?? i.grams,
        recipeId: recipe.recipeId
      })
    })
  })

  form.selectedIngredients.forEach((si) => {
    items.push({
      itemType: ShoppingListItemType.Ingredient,
      ingredientId: si.id,
      amount: si.grams,
      unit: si.unit.toString()
    })
  })

  form.manualItems.forEach((mi) => {
    items.push({
      itemType: ShoppingListItemType.Manual,
      name: mi.name,
      amount: mi.amount,
      unit: mi.unit
    })
  })

  return {
    date: form.date,
    items
  }
}