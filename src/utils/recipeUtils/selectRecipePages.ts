import type { RootState } from '../../store'
import type {
  PageWithParentLabel,
  Page
} from '../../types/navigation/PageConfig'

export const selectRecipePages = (state: RootState): PageWithParentLabel => {
  const { navMap } = state.recipeNav // { Breakfast: [1, 3], Asian: [2] }
  const { data: recipes } = state.recipe // flat recipe list

  return Object.entries(navMap).map(([categoryName, recipeIds]) => {
    const children: { label: string; path: string }[] = recipeIds.map((id) => {
      const recipe = recipes.find((r) => r.id === id)! // safe to force
      return { label: recipe.name, path: `/recipes/${recipe.id}` }
    })

    return {
      label: categoryName,
      isParent: true,
      children
    } as Page
  })
}
