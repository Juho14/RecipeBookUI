import { useDispatch } from 'react-redux'
import { Button, Grid } from '@mui/material'

import type { Recipe } from '../../../types/Recipe/Recipe'
import type { RecipeIngredient } from '../../../types/Recipe/Recipe'
import { addRecipe } from '../../../store/recipeSlice'

import { type DefaultValues } from 'react-hook-form'
import { Form, useForm } from '../../form'
import TextInput from '../../form/inputs/TextInput'
import ProcessFields from './ProcessFields'
import IngredientFields from './IngredientFields'
import type { Ingredient } from '../../../types/ingredients/Ingredient'

const defaultIngredient: RecipeIngredient = {
  ingredient: {} as Ingredient,
  grams: 0,
  cookingUnit: 'g'
}

const defaultValues: DefaultValues<Recipe> = {
  id: 0,
  name: '',
  slug: '',
  imgPath: '',
  time: '',
  servings: 1,
  ingredients: [defaultIngredient],
  process: [{ en: '' }]
}

const RecipeForm = () => {
  const dispatch = useDispatch()
  const onSubmit = (data: Recipe) => {
    console.log(data)
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
