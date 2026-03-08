import { Button, Grid, IconButton, Typography } from '@mui/material'
import Selector from '../../form/inputs/Selector'
import TextInput from '../../form/inputs/TextInput'
import DeleteIcon from '@mui/icons-material/Delete'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import type { SelectOption } from '../../../types/form/SelectOption'
import AddIcon from '@mui/icons-material/Add'
import type { FormRecipeIngredient } from '../../../types/Recipe/Recipe'
import { useTranslation } from 'react-i18next'
import { amountToGrams } from '../../../utils/ingredientUtils/amountToGrams'
import { getIngredientById } from '../../../utils/ingredientUtils/getIngredientById'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store'
import {
  cookingUnitOptions,
  CookingUnits
} from '../../../constants/Recipes/cookingUnit'
import { getIngredientFlags } from '../../../utils/ingredientUtils/getIngredientFlags'

interface IngredientFieldsProps {
  defaultIngredient: FormRecipeIngredient
}

const IngredientFields = ({ defaultIngredient }: IngredientFieldsProps) => {
  const { control, getValues, setValue } = useFormContext()
  const { t } = useTranslation()

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient
  } = useFieldArray({
    control,
    name: 'ingredients'
  })

  const ingredientsWatch = useWatch({
    name: 'ingredients',
    control,
    defaultValue: []
  })

  const ingredients = useSelector((state: RootState) => state.ingredients.data)
  if (ingredients?.length === 0) return null

  const ingredientOptions: SelectOption<number>[] = ingredients.map(
    (ingredient) => ({
      value: ingredient.id,
      label: ingredient.name,
      density: ingredient.density
    })
  )

  const resetCookingUnit = (index: number) => {
    setValue(`ingredients.${index}.amount`, '')
    setValue(`ingredients.${index}.cookingUnit`, CookingUnits.GRAM)
  }

  const handleIngredientChange = (index: number, value: number) => {
    const ingredient = getIngredientById(ingredients, value)
    if (!ingredient?.density) resetCookingUnit(index)
  }

  const handleMeasureChange = (index: number) => {
    const ingredient = getValues(`ingredients.${index}`)
    setValue(
      `ingredients.${index}.grams`,
      amountToGrams(ingredients, ingredient)
    )
  }

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h6'>{t('recipies.ingredients')}</Typography>
      </Grid>

      {ingredientFields.map((field, index) => {
        const ingredientField = ingredientsWatch[index] || {}
        const { isLiquid, showAmount } = getIngredientFlags(
          ingredientField,
          ingredients
        )

        return (
          <Grid
            size={{ xs: 12 }}
            key={field.id}
            container
            spacing={1}
            alignItems='center'
          >
            <Grid size={{ xs: 11 }}>
              <Selector
                name={`ingredients.${index}.ingredientId`}
                label={t('recipies.ingredient')}
                options={ingredientOptions}
                onChange={(value) => handleIngredientChange(index, value)}
                required
              />
            </Grid>
            <Grid size={{ xs: 1 }}>
              <IconButton onClick={() => removeIngredient(index)}>
                <DeleteIcon />
              </IconButton>
            </Grid>

            {isLiquid && (
              <Grid size={{ xs: 11 }}>
                <Selector
                  name={`ingredients.${index}.cookingUnit`}
                  label={t('recipies.cookingUnit')}
                  options={cookingUnitOptions(t)}
                  required={isLiquid}
                />
              </Grid>
            )}

            <Grid size={{ xs: 11 }}>
              {showAmount ? (
                <TextInput
                  name={`ingredients.${index}.amount`}
                  label={t('recipies.realWorldMeasurement')}
                  onChange={() => handleMeasureChange(index)}
                  required={showAmount}
                />
              ) : (
                <TextInput
                  name={`ingredients.${index}.grams`}
                  label={t('recipies.grams')}
                  required={!showAmount}
                />
              )}
            </Grid>
          </Grid>
        )
      })}

      <Grid size={{ xs: 12 }} mt={2}>
        <Button
          startIcon={<AddIcon />}
          onClick={() => appendIngredient(defaultIngredient)}
        >
          {t('recipies.addIngredient')}
        </Button>
      </Grid>
    </>
  )
}

export default IngredientFields
