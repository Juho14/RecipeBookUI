import type { UnifiedIngredient } from '../../types/shoppingList/UnifiedIngredient'

/**
 * Groups an array of ingredient items by source.
 * Manual sources are keyed as 'manual', recipe sources by recipe name.
 */
export const groupItemsBySource = (items: UnifiedIngredient[]) => {
  return items.reduce<Record<string, UnifiedIngredient[]>>((acc, item) => {
    const key =
      item.source.type === 'manual'
        ? 'manual'
        : item.source.recipeName || 'unknown'

    if (!acc[key]) acc[key] = []
    acc[key].push(item)
    return acc
  }, {})
}
