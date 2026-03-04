import type { AnyRecipe } from '../../types/Recipe/Recipe'

export interface RecipeLookup {
  [key: string]: AnyRecipe
}

export const getRecipeFromParams = (
  params: { category?: string; recipe?: string; id?: string },
  lookup: RecipeLookup
) => {
  if (params.id) {
    return lookup[params.id]
  } else if (params.category && params.recipe) {
    const key = `/${params.category}/${params.recipe}`.toLowerCase()
    return lookup[key]
  }
  return undefined
}
