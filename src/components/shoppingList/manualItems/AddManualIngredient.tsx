import { Button, Grid, IconButton } from '@mui/material'
import { useFieldArray, useFormContext } from 'react-hook-form'
import Selector from '../../form/inputs/Selector'
import type {
  ManualIngredient,
  ShoppingListForm
} from '../../../types/shoppingList/ShoppingListForm'
import TextInput from '../../form/inputs/TextInput'
import DeleteIcon from '@mui/icons-material/Delete'
import { Fragment } from 'react/jsx-runtime'
import type { SelectOption } from '../../../types/form/SelectOption'
import type { RootState } from '../../../store'
import { useAppSelector } from '../../../store/hooks'
import {
  cookingUnitOptions,
  CookingUnits
} from '../../../constants/Recipes/cookingUnit'
import { useTranslation } from 'react-i18next'

const defaultIngredient: ManualIngredient = {
  id: 1,
  grams: 0,
  unit: CookingUnits.GRAM
}

const AddManualIngredient = () => {
  const { t } = useTranslation()
  const { control } = useFormContext<ShoppingListForm>()

  const ingredients = useAppSelector(
    (state: RootState) => state.ingredients.data
  )

  const ingredientOptions: SelectOption<number>[] = ingredients.map(
    (ingredient) => ({
      value: ingredient.id,
      label: ingredient.name,
      density: ingredient.density
    })
  )
  const {
    fields: ingredientList,
    append,
    remove
  } = useFieldArray<ShoppingListForm, 'selectedIngredients', 'fieldId'>({
    control,
    name: 'selectedIngredients',
    keyName: 'fieldId'
  })

  const handleAddIngredient = () => {
    append(defaultIngredient)
  }

  if (ingredients?.length === 0) return null

  return (
    <Grid container spacing={2} maxWidth={500} justifySelf='center'>
      {ingredientList.map((ingredient, index) => {
        return (
          <Fragment key={ingredient.fieldId}>
            <Grid size={{ xs: 3.5 }}>
              <Selector
                name={`selectedIngredients.${index}.id`}
                label='Select ingredient'
                options={ingredientOptions}
              />
            </Grid>
            <Grid size={{ xs: 3.5 }}>
              <TextInput
                name={`selectedIngredients.${index}.grams`}
                label='Amount'
                type='number'
              />
            </Grid>
            <Grid size={{ xs: 3.5 }}>
              <Selector
                name={`selectedIngredients.${index}.unit`}
                label='Unit'
                options={cookingUnitOptions(t)}
              />
            </Grid>
            <Grid size={{ xs: 1 }} alignContent={'center'}>
              <IconButton onClick={() => remove(index)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Fragment>
        )
      })}

      <Grid size={{ xs: 12 }} textAlign={'center'}>
        <Button variant='contained' onClick={handleAddIngredient}>
          Add ingredient
        </Button>
      </Grid>
    </Grid>
  )
}

export default AddManualIngredient
