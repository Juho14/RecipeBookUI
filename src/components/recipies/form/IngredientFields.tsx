import { Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import Selector from '../../form/inputs/Selector'
import TextInput from '../../form/inputs/TextInput'
import DeleteIcon from '@mui/icons-material/Delete'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { INGREDIENTS } from '../../../constants/Data/Ingredients/Ingredients'
import type { SelectOption } from '../../../types/form/SelectOption'
import AddIcon from '@mui/icons-material/Add'
import type { RecipeIngredient } from '../../../types/Recipe/Recipe'
import { useTranslation } from 'react-i18next'

interface IngredientFieldsProps {
  defaultIngredient: RecipeIngredient
}

const IngredientFields = ({ defaultIngredient }: IngredientFieldsProps) => {
  const { control } = useFormContext()
  const { t } = useTranslation()

  const {
    fields: ingredientsFields,
    append: appendIngredient,
    remove: removeIngredient
  } = useFieldArray({
    control,
    name: 'ingredients'
  })

  const ingredientOptions: SelectOption<number>[] = Object.values(
    INGREDIENTS
  ).map((ingredient) => ({
    value: ingredient.id,
    label: ingredient.name
  }))
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h6'>Ingredients</Typography>
      </Grid>
      {ingredientsFields.map((field, index) => (
        <React.Fragment key={field.id}>
          <Grid size={{ xs: 12 }}>
            <Selector
              name={`ingredients.${index}.ingredient.id`}
              label='Ingredient'
              options={ingredientOptions}
            />
            <TextInput name='number' label='Amount (grams)' />
            <TextInput
              name='altAmount'
              label='Real world measurement (e.g., 1 tbsp)'
            />
            <TextInput name='cookingUnit' label='Unit' />
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
    </>
  )
}

export default IngredientFields
