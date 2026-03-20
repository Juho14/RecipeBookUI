import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import type { Recipe } from '../../types/Recipe/Recipe'
import type { ShoppingListForm } from '../../types/shoppingList/ShoppingListForm'
import { fetchIngredientsForRecipes } from '../../fetches/recipes'
import { useAppDispatch } from '../../store/hooks'

export const useRecipeIngredients = (recipes: Recipe[]) => {
  const { setValue } = useFormContext<ShoppingListForm>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!recipes.length) {
      setValue('recipeIngredients', [])
      return
    }

    const fetchData = async () => {
      try {
        const result = await dispatch(
          fetchIngredientsForRecipes(recipes.map(r => r.id))
        ).unwrap()

        setValue('recipeIngredients', result) // store directly in form
      } catch (e) {
        console.error('Failed to fetch recipe ingredients', e)
      }
    }

    fetchData()
  }, [recipes, dispatch, setValue])
}