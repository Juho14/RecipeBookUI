import { Button, Grid, IconButton, Typography } from '@mui/material'
import Selector from '../../form/inputs/Selector'
import TextInput from '../../form/inputs/TextInput'
import DeleteIcon from '@mui/icons-material/Delete'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
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

  const ingredientOptions: SelectOption<number>[] = Object.values(
    INGREDIENTS
  ).map((ingredient) => ({
    value: ingredient.id,
    label: ingredient.name,
    density: ingredient.density
  }))

  const cookingUnitOptions: SelectOption<CookingUnit>[] = COOKING_UNITS.map(
    (unit) => ({
      value: unit,
      label: t(`cookingUnit.${unit}`)
    })
  )

  const resetCookingUnit = (index: number) => {
    setValue(`ingredients.${index}.amount`, '')
    setValue(`ingredients.${index}.cookingUnit`, 'g')
  }

  const handleIngredientChange = (index: number, value: number) => {
    const ingredient = getIngredientById(value)
    if (!ingredient?.density) resetCookingUnit(index)
  }

  const handleMeasureChange = (index: number) => {
    const ingredient = getValues(`ingredients.${index}`)
    setValue(`ingredients.${index}.grams`, amountToGrams(ingredient))
  }

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h6'>{t('recipies.ingredients')}</Typography>
      </Grid>

      {ingredientFields.map((field, index) => {
        const ingredientField = ingredientsWatch[index] || {}
        const ingredientId = ingredientField.ingredient?.id
        const cookingUnit = ingredientField.cookingUnit
        const selectedIngredient = ingredientId
          ? getIngredientById(ingredientId)
          : null
        const hasDensity = !!selectedIngredient?.density

        const showAmount = hasDensity && cookingUnit !== 'g'

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
                name={`ingredients.${index}.ingredient.id`}
                label={t('recipies.ingredient')}
                options={ingredientOptions}
                onChange={(value) => handleIngredientChange(index, value)}
              />
            </Grid>
            <Grid size={{ xs: 1 }}>
              <IconButton onClick={() => removeIngredient(index)}>
                <DeleteIcon />
              </IconButton>
            </Grid>

            {hasDensity && (
              <Grid size={{ xs: 11 }}>
                <Selector
                  name={`ingredients.${index}.cookingUnit`}
                  label={t('recipies.cookingUnit')}
                  options={cookingUnitOptions}
                />
              </Grid>
            )}

            <Grid size={{ xs: 11 }}>
              {showAmount ? (
                <TextInput
                  name={`ingredients.${index}.amount`}
                  label={t('recipies.realWorldMeasurement')}
                  onChange={() => handleMeasureChange(index)}
                />
              ) : (
                <TextInput
                  name={`ingredients.${index}.grams`}
                  label={t('recipies.grams')}
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
