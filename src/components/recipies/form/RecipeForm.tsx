import React from 'react'
import { useDispatch } from 'react-redux'
import {
  TextField,
  Button,
  Grid,
  IconButton,
  Typography,
  Box
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

import type { Recipe } from '../../../types/Recipe/Recipe'
import type { RecipeIngredient } from '../../../types/Recipe/Recipe'
import { addRecipe } from '../../../store/recipeSlice'
import Selector from '../../form/inputs/Selector'
import { INGREDIENTS } from '../../../constants/Data/Ingredients/Ingredients'
import type { SelectOption } from '../../../types/form/SelectOption'
import { useFieldArray, Controller, type DefaultValues } from 'react-hook-form'
import { Form, useForm } from '../../form'
import TextInput from '../../form/inputs/TextInput'

const defaultIngredient: RecipeIngredient = {
  ingredient: {} as any,
  amount: 0,
  unit: 'g'
}

const defaultValues: DefaultValues<Recipe> = {
  name: '',
  slug: '',
  imgPath: '',
  time: '',
  servings: 1,
  ingredients: [defaultIngredient],
  process: [{ en: '' }]
}

const ingredientOptions: SelectOption<number>[] = Object.values(
  INGREDIENTS
).map((ingredient) => ({
  value: ingredient.id,
  label: ingredient.name
}))

const RecipeForm = () => {
  const dispatch = useDispatch()
  const onSubmit = (data: Recipe) => {
    dispatch(addRecipe(data))
  }

  const form = useForm({
    defaultValues,
    onSubmit
    // resolver This is the validator function. Add later.
  })

  const { control, register} = form

  const {
    fields: ingredientsFields,
    append: appendIngredient,
    remove: removeIngredient
  } = useFieldArray({
    control,
    name: 'ingredients'
  })

  const {
    fields: processFields,
    append: appendProcess,
    remove: removeProcess
  } = useFieldArray({
    control,
    name: 'process'
  })

  return (
    <Form form={form}>
      <Grid container spacing={2} maxWidth={500}>
        {/* Recipe Info */}
        <Grid size={{ xs: 12 }}>
          <TextInput
            name='name'
            label={'Recipe name'}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField fullWidth label='Time' {...register('time')} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label='Servings'
            type='number'
            {...register('servings', { valueAsNumber: true })}
          />
        </Grid>

        {/* Ingredients */}
        <Grid size={{ xs: 12 }}>
          <Typography variant='h6'>Ingredients</Typography>
        </Grid>
        {ingredientsFields.map((field, index) => (
          <React.Fragment key={field.id}>
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name={`ingredients.${index}.ingredient.id`}
                defaultValue={field.ingredient.id}
                render={({ field: controllerField }) => (
                  <Selector
                    name={`ingredients.${index}.ingredient.id`}
                    options={ingredientOptions}
                    onChange={controllerField.onChange}
                  />
                )}
              />
              <TextField
                fullWidth
                label='Amount (grams)'
                type='number'
                {...register(`ingredients.${index}.amount`, {
                  valueAsNumber: true
                })}
              />
              <TextField
                fullWidth
                label='Unit'
                {...register(`ingredients.${index}.unit`)}
              />
              <TextField
                fullWidth
                label='Alt amount'
                type='number'
                {...register(`ingredients.${index}.alt_amount`, {
                  valueAsNumber: true
                })}
              />
            </Grid>
            <Grid size={{ xs: 2 }}>
              <IconButton onClick={() => removeIngredient(index)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </React.Fragment>
        ))}
        <Grid size={{ xs: 12 }}>
          <Button
            startIcon={<AddIcon />}
            onClick={() => appendIngredient(defaultIngredient)}
          >
            Add Ingredient
          </Button>
        </Grid>

        {/* Process */}
        <Grid size={{ xs: 12 }}>
          <Typography variant='h6'>Cooking process</Typography>
        </Grid>
        {processFields.map((field, index) => (
          <Box
            key={field.id}
            sx={{ border: '1px solid black', p: 2, mb: 2 }}
            display='flex'
            flexDirection='column'
            gap={2}
          >
            <Box display='flex'>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label={`Step ${index + 1}`}
                  {...register(`process.${index}.en`)}
                  multiline
                />
              </Grid>
              <Grid size={{ xs: 2 }}>
                <IconButton onClick={() => removeProcess(index)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Box>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label={`Vaihe ${index + 1}`}
                {...register(`process.${index}.fi`)}
                multiline
              />
            </Grid>
          </Box>
        ))}
        <Grid size={{ xs: 12 }}>
          <Button
            startIcon={<AddIcon />}
            onClick={() => appendProcess({ en: '' })}
          >
            Add Step
          </Button>
        </Grid>

        {/* Submit */}
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
