import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchRecipeDetails } from '../../fetches/recipes'
import type { RootState } from '../../store'

export const useRecipe = () => {
  const dispatch = useAppDispatch()
  const activeRecipe = useAppSelector(
    (state: RootState) => state.recipe.activeRecipe
  )
  const { id } = useParams<{ id?: string }>()

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchRecipeDetails(parseInt(id)))
    }
  }, [dispatch, id])

  return {
    activeRecipe,
    showRecipe: !!activeRecipe
  }
}
