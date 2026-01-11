import { useDispatch } from 'react-redux'
import { Button, Grid } from '@mui/material'
import { Form, useForm } from '../form'
import TextInput from '../form/inputs/TextInput'
import Selector from '../form/inputs/Selector'
import type { Ingredient } from '../../types/ingredients/Ingredient'
import { addIngredient } from '../../store/ingredientsSlice'
import { INGREDIENT_TYPE_OPTIONS } from '../../constants/Data/Ingredients/IngredientTypeOptions'
import { type DefaultValues } from 'react-hook-form'
import { validateMacros } from '../../utils/ingredientUtils/ValidateMacros'
import { ingredientFormValidator } from './ingredientValidator'
import { INGREDIENT_TYPE } from '../../types/ingredients/IngredientTypes'

const defaultIngredient: Ingredient = {
  id: 0,
  name: '',
  nameFi: '',
  type: INGREDIENT_TYPE.VEGETABLE,
  macros: {
    kcal: 0,
    fats: { total: 0, saturated: 0 },
    carbs: { total: 0, sugars: 0 },
    protein: 0,
    salt: 0
  }
}

const defaultValues: DefaultValues<Ingredient> = defaultIngredient

const IngredientsForm = () => {
  const dispatch = useDispatch()

  const onSubmit = (data: Ingredient) => {
    console.log(data)
    const isValid = validateMacros(data.macros)
    console.log('Macros are valid:', isValid)
    dispatch(addIngredient(data))
  }

  const form = useForm({
    defaultValues,
    onSubmit,
    resolver: ingredientFormValidator
  })

  return (
    <Form form={form}>
      <Grid container spacing={2} maxWidth={500} justifySelf='center'>
        <Grid size={{ xs: 6 }}>
          <TextInput name='name' label='Name' required />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextInput name='nameFi' label='Finnish name' />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Selector
            name='type'
            label='Type'
            options={INGREDIENT_TYPE_OPTIONS}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextInput name='macros.kcal' label='kcal / 100g' required />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextInput name='macros.fats.total' label='Fat (total)' required />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextInput
            name='macros.fats.saturated'
            label='Fat (saturated)'
            required
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextInput name='macros.carbs.total' label='Carbs (total)' required />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextInput
            name='macros.carbs.sugars'
            label='Carbs (sugars)'
            required
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextInput name='macros.protein' label='Protein' required />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextInput name='macros.salt' label='Salt' required />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <Button fullWidth variant='contained' type='submit'>
            Save Ingredient
          </Button>
        </Grid>
      </Grid>
    </Form>
  )
}

export default IngredientsForm
