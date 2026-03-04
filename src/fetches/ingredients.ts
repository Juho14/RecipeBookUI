import { createFetchPipelineThunk } from './fetchPipeline'
import { getIngredientsSuccess } from '../store/ingredientsSlice'
import type { Ingredient } from '../types/ingredients/Ingredient'
import { fetchData } from './fetchData'
import type { IngredientFormValues } from '../components/ingredients/form/IngredientsForm'

export const fetchIngredients = createFetchPipelineThunk<Ingredient[], void>({
  selectStatus: (state) => state.ingredients.status,
  apiCall: () => fetchData<Ingredient[]>('/ingredients'),
  successAction: (payload, dispatch) => {
    dispatch(getIngredientsSuccess(payload))
  }
})

export const addIngredient = createFetchPipelineThunk<
  void,
  IngredientFormValues
>({
  selectStatus: (state) => state.ingredients.status,
  apiCall: (payload) => fetchData<void>('/ingredients', 'POST', payload),
  successAction: (_, dispatch) => dispatch(fetchIngredients())
})
