import { Button, Grid, IconButton } from '@mui/material'
import { useFieldArray, useFormContext } from 'react-hook-form'
import Selector from '../../form/inputs/Selector'
import type {
  ManualIngredient,
  ShoppingListForm
} from '../../../types/shoppingList/ShoppingListForm'
import TextInput from '../../form/inputs/TextInput'
import DeleteIcon from '@mui/icons-material/Delete'
import { getIngredientOptions } from '../../../hooks/ingredients/useIngredientOptions'
import { INGREDIENTS } from '../../../constants/Data/Ingredients/Ingredients'
import { Fragment } from 'react/jsx-runtime'

const defaultIngredient: ManualIngredient = {
  id: 1,
  amount: 1,
  unit: 'g'
}

const AddManualIngredient = () => {
  const { control } = useFormContext<ShoppingListForm>()

  const ingredientOptions = getIngredientOptions(INGREDIENTS)

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
                name={`selectedIngredients.${index}.amount`}
                label='Amount'
                type='number'
              />
            </Grid>
            <Grid size={{ xs: 3.5 }}>
              <TextInput
                name={`selectedIngredients.${index}.unit`}
                label='Unit'
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
