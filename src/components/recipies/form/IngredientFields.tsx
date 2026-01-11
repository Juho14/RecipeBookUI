import { Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import Selector from '../../form/inputs/Selector'
import TextInput from '../../form/inputs/TextInput'
import DeleteIcon from '@mui/icons-material/Delete'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { INGREDIENTS } from '../../../constants/Data/Ingredients/Ingredients'
import type { SelectOption } from '../../../types/form/SelectOption'
import AddIcon from '@mui/icons-material/Add'
import type { RecipeIngredient } from '../../../types/Recipe/Recipe'
import { useTranslation } from 'react-i18next'
import {
  COOKING_UNITS,
  type CookingUnit
} from '../../../types/ingredients/CookingUnit'
import { amountToGrams } from '../../../utils/ingredientUtils/amountToGrams'
import { getIngredientById } from '../../../utils/ingredientUtils/getIngredientById'

interface IngredientFieldsProps {
  defaultIngredient: RecipeIngredient
}

const IngredientFields = ({ defaultIngredient }: IngredientFieldsProps) => {
  const { control, getValues, setValue } = useFormContext()
  const { t } = useTranslation()
  const [hasDensity, setHasDensity] = useState(false)

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

  const cookingUnitOptions: SelectOption<CookingUnit>[] = COOKING_UNITS.map(
    (unit) => ({
      value: unit,
      label: t(`cookingUnit.${unit}`)
    })
  )

  const resetCookingUnit = (index: number) => {
    setValue(`ingredients.${index}.alt_amount`, '')
  }

  const handleIngredientChange = (index: number, value: number) => {
    const ingredient = getIngredientById(value)
    console.log(ingredient)
    if (ingredient?.density) setHasDensity(true)
    else {
      resetCookingUnit(index)
      setHasDensity(false)
    }
  }

  const handleMeasureChange = (index: number) => {
    const ingredient = getValues(`ingredients.${index}`)

    const grams = amountToGrams(ingredient)
    setValue(`ingredients.${index}.amount`, grams)
  }

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h6'>{t('recipies.ingredients')}</Typography>
      </Grid>
      {ingredientsFields.map((field, index) => (
        <React.Fragment key={field.id}>
          <Grid size={{ xs: 12 }}>
            <Selector
              name={`ingredients.${index}.ingredient.id`}
              label={t('recipies.ingredient')}
              options={ingredientOptions}
              onChange={(value) => handleIngredientChange(index, value)}
            />
            {hasDensity && (
              <Selector
                name={`ingredients.${index}.cookingUnit`}
                label={t('recipies.cookingUnit')}
                options={cookingUnitOptions}
              />
            )}

            <TextInput
              name={`ingredients.${index}.alt_amount`}
              label={t('recipies.realWorldMeasurement')}
              onChange={() => handleMeasureChange(index)}
            />
            <TextInput
              name={`ingredients.${index}.amount`}
              label={t('recipies.amount')}
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
    </>
  )
}

export default IngredientFields
