import type { RecipeNavMap } from '../../types/navigation/RecipeNavMap'
import type { GroupedRecipes, Recipe } from '../../types/Recipe/Recipe'

export const mapGroupedRecipesToNav = (grouped: GroupedRecipes[]): RecipeNavMap => {
  return grouped.reduce((acc: RecipeNavMap, group) => {
    acc[group.category.name] = group.recipes.map((r) => r.id)
    return acc
  }, {})
}

export const getRecipesByCategory = (recipes: GroupedRecipes[]): Recipe[] => {
  return recipes.reduce((acc: Recipe[], group) => {
    return [...acc, ...group.recipes]
  }, [])
}

export const flattenRecipes = (grouped: GroupedRecipes[]): Recipe[] => {
  return grouped.flatMap((group) =>
    group.recipes.map((r) => ({ ...r, category: group.category.name }))
  )
}
