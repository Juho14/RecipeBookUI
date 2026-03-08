import type { Page } from '../../layout/navigation/types/PageConfig'
import type { RootState } from '../../store'

export const selectRecipePages = (state: RootState): Page[] => {
  const { navMap } = state.recipeNav
  const { data: recipes } = state.recipe

  return Object.entries(navMap).map(([categoryName, recipeIds]) => {
    const children: Page[] = recipeIds.map((id) => {
      const recipe = recipes.find((r) => r.id === id)!

      return {
        id: `recipe-${recipe.id}`,
        label: recipe.name,
        path: `/recipes/${recipe.id}`
      }
    })

    return {
      id: `category-${categoryName.toLowerCase()}`,
      label: categoryName,
      children
    }
  })
}
