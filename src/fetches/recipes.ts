import { setRecipeNavMap } from '../store/recipeNavSlice'
import { getRecipeDetailsSuccess, getRecipesSuccess } from '../store/recipeSlice'
import type { GroupedRecipes, Recipe } from '../types/Recipe/Recipe'
import {
  flattenRecipes,
  mapGroupedRecipesToNav
} from '../utils/recipeUtils/RecipeMapping'
import { fetchData } from './fetchData'
import { createFetchPipelineThunk } from './fetchPipeline'
import { fetchIngredients } from './ingredients'

export const fetchRecipes = createFetchPipelineThunk<Recipe[], void>({
  selectStatus: (state) => state.recipe.status,
  apiCall: () => fetchData<Recipe[]>('/recipes'),
  successAction: (payload, dispatch) => {
    dispatch(getRecipesSuccess(payload))
  }
})

export const fetchGroupedRecipes = createFetchPipelineThunk<
  GroupedRecipes[],
  void
>({
  selectStatus: (state) => state.recipe.status,
  apiCall: () => fetchData<GroupedRecipes[]>('/recipes/grouped'),
  successAction: (payload, dispatch) => {
    const recipes = flattenRecipes(payload)
    dispatch(getRecipesSuccess(recipes))
    const navMap = mapGroupedRecipesToNav(payload)
    dispatch(setRecipeNavMap(navMap))
  }
})

export const fetchRecipeDetails = createFetchPipelineThunk<
  Recipe,
  number
>({
  selectStatus: (state) => state.recipe.status,
  apiCall: (id) => fetchData<Recipe>(`/recipes/${id}`),
  successAction: (payload, dispatch) => {
    dispatch(getRecipeDetailsSuccess(payload))
  }
})

export const addRecipe = createFetchPipelineThunk<void, Recipe>({
  selectStatus: (state) => state.ingredients.status,
  apiCall: (payload) => fetchData<void>('/recipes', 'POST', payload),
  successAction: () => fetchIngredients()
})
