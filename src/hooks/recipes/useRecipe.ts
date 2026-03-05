import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchRecipeDetails } from '../../fetches/recipes'
import { setActiveRecipe } from '../../store/recipe/recipeSlice'
import { RECIPE_LIST } from '../../constants/Data/Recipies/RecipeList'
import {
  getRecipeFromParams,
  type RecipeLookup
} from '../../utils/recipeUtils/getRecipeFromParams'
import type { RootState } from '../../store'

export const useRecipe = () => {
  const dispatch = useAppDispatch()
  const activeRecipe = useAppSelector(
    (state: RootState) => state.recipe.activeRecipe
  )
  const addedRecipies = useAppSelector((state) => state.recipe.data)

  const { param1, param2 } = useParams<{ param1?: string; param2?: string }>()

  const isIdRoute = !!param1 && !param2

  const id = isIdRoute && param1 ? parseInt(param1) : undefined
  const category = !isIdRoute ? param1 : undefined
  const recipeSlug = !isIdRoute ? param2 : undefined

  // Build a lookup table for fast access
  const recipeLookup: RecipeLookup = useMemo(() => {
    const lookup: RecipeLookup = {}
    RECIPE_LIST.forEach((r) => (lookup[r.slug.toLowerCase()] = r))
    addedRecipies.forEach((r) => (lookup[r.id.toString()] = r))
    return lookup
  }, [addedRecipies])

  const recipe = useMemo(() => {
    return getRecipeFromParams(
      { category, recipe: recipeSlug, id },
      recipeLookup
    )
  }, [category, recipeSlug, id, recipeLookup])

  // Fetch user-added recipe if it's an ID route
  useEffect(() => {
    if (isIdRoute && id !== undefined) {
      dispatch(fetchRecipeDetails(id))
    }
  }, [dispatch, id, isIdRoute])

  // Set active recipe for base recipes
  useEffect(() => {
    if (recipe && !isIdRoute) {
      dispatch(setActiveRecipe(recipe))
    }
  }, [dispatch, recipe, isIdRoute])

  return {
    activeRecipe,
    showRecipe: !!activeRecipe
  }
}
