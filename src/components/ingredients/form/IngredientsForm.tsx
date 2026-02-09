import { useDispatch } from 'react-redux'
import { Button, Grid } from '@mui/material'
import { Form, useForm } from '../../form'
import TextInput from '../../form/inputs/TextInput'
import Selector from '../../form/inputs/Selector'
import type { Ingredient } from '../../../types/ingredients/Ingredient'
import { addIngredient } from '../../../store/ingredientsSlice'
import { INGREDIENT_TYPE_OPTIONS } from '../../../constants/Data/Ingredients/IngredientTypeOptions'
import { useWatch, type DefaultValues } from 'react-hook-form'
import { ingredientFormValidator } from './ingredientValidator'
import { INGREDIENT_TYPE } from '../../../types/ingredients/IngredientTypes'
import CheckboxInput from '../../form/inputs/Checkbox'
import { useIngredientLiquidLogic } from './useIngredientLiquidLogic'
import MacroFields from './MacroFields'
import { post } from '../../../requests/Request'

type ManageIngredientForm = {
  useMl: boolean
  isLiquidOverride: boolean
}

export type IngredientFormValues = Ingredient & ManageIngredientForm

const defaultFormValues: IngredientFormValues = {
  id: 0,
  name: '',
  nameFi: '',
  type: INGREDIENT_TYPE.VEGETABLE,
  useMl: false,
  isLiquidOverride: false,
  density: 1,
  macros: {
    kcal: 0,
    fats: { total: 0, saturated: 0 },
    carbs: { total: 0, sugars: 0 },
    protein: 0,
    salt: 0,
    fiber: 0
  }
}


const defaultValues: DefaultValues<IngredientFormValues> = defaultFormValues

const IngredientsForm = () => {
  const dispatch = useDispatch()
  const onSubmit = (data: IngredientFormValues) => {
    console.log(data)
    dispatch(addIngredient(data))
  }

  const form = useForm<IngredientFormValues>({
    defaultValues,
    onSubmit,
    resolver: ingredientFormValidator
  })

  const { control } = form

  const watchedType = useWatch({ name: 'type', control })
  const watchedUseMl = useWatch({ name: 'useMl', control })
  const watchedManualOverride = useWatch({ name: 'isLiquidOverride', control })

  const { isLiquid, requireDensity, showManualCheckbox } =
    useIngredientLiquidLogic(
      form,
      watchedType,
      watchedUseMl,
      watchedManualOverride
    )

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
        {watchedType !== INGREDIENT_TYPE.SEASONING && (
          <>
            <Grid size={{ xs: showManualCheckbox ? 6 : isLiquid ? 3 : 6 }}>
              <TextInput
                name='macros.kcal'
                label={watchedUseMl ? 'kcal / 100ml' : 'kcal / 100g'}
                required
              />
            </Grid>

            {showManualCheckbox && (
              <Grid size={{ xs: showManualCheckbox && isLiquid ? 6 : 3 }}>
                <CheckboxInput name='isLiquidOverride' label='Is it liquid' />
              </Grid>
            )}
            {isLiquid && (
              <Grid size={{ xs: showManualCheckbox && isLiquid ? 6 : 3 }}>
                <CheckboxInput name='useMl' label='Use kcal / 100ml' />
              </Grid>
            )}

            {requireDensity && (
              <Grid size={{ xs: 12 }}>
                <TextInput name='density' label='Density (g/ml)' required />
              </Grid>
            )}
            <Grid size={{ xs: 12 }}>
              <h4>Input data per {watchedUseMl ? '100ml' : '100g'}</h4>
            </Grid>

            <MacroFields />
          </>
        )}

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
