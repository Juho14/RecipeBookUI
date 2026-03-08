import { Button, Grid } from '@mui/material'
import type { FormRecipeIngredient, Recipe } from '../../../types/Recipe/Recipe'
import { type DefaultValues } from 'react-hook-form'
import { Form, useForm } from '../../form'
import TextInput from '../../form/inputs/TextInput'
import ProcessFields from './ProcessFields'
import IngredientFields from './IngredientFields'
import { useEffect } from 'react'
import { fetchIngredients } from '../../../fetches/ingredients'
import { useAppDispatch } from '../../../store/hooks'
import RecipeTagFields from './RecipeTagFields'
import { addRecipe } from '../../../fetches/recipes'
import { CookingUnits } from '../../../constants/Recipes/cookingUnit'

const defaultIngredient: FormRecipeIngredient = {
  name: '',
  ingredientId: undefined,
  grams: 0,
  cookingUnit: CookingUnits.GRAM
}

const defaultValues: DefaultValues<Recipe> = {
  id: 0,
  category: '',
  name: '',
  slug: '',
  imgPath: '',
  duration: '',
  servings: 1,
  ingredients: [defaultIngredient],
  steps: [{ description: '', descriptionFi: undefined }]
}

const RecipeForm = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchIngredients())
  }, [])

  const onSubmit = (data: Recipe) => {
    dispatch(addRecipe(data))
  }

  const form = useForm({
    defaultValues,
    onSubmit
  })

  return (
    <Form form={form}>
      <Grid container spacing={2} maxWidth={500} justifySelf={'center'}>
        <Grid size={{ xs: 12 }}>
          <TextInput name='category' label={'Category'} required />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextInput name='name' label={'Recipe name'} required />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextInput name='time' label='Duration' required />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextInput name='servings' label='Servings' required />
        </Grid>
        <IngredientFields defaultIngredient={defaultIngredient} />
        <ProcessFields />
        <RecipeTagFields />
        <Grid size={{ xs: 12 }}>
          <Button fullWidth variant='contained' type='submit'>
            Save Recipe
          </Button>
        </Grid>
      </Grid>
    </Form>
  )
}

export default RecipeForm
