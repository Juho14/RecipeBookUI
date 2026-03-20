import { Box, Button, Grid } from '@mui/material'
import { Form, useForm } from '../form'
import AddRecipeToList from './addRecipiesToList/AddRecipeToList'
import type { ShoppingListForm } from '../../types/shoppingList/ShoppingListForm'
import AddManualIngredient from './manualItems/AddManualIngredient'
import SummarisedList from './summary/SummarisedList'
import AddManualItem from './manualItems/AddManualItem'
import DateInput from '../form/inputs/DateInput'
import { flattenShoppingListForm } from '../../utils/shoppingListUtils/flattenShoppingListForm'
import { useAppDispatch } from '../../store/hooks'
import { upsertShoppingList } from '../../fetches/shoppingList'

const defaultValues: ShoppingListForm = {
  date: new Date(),
  selectedRecipies: [],
  selectedIngredients: [],
  recipeIngredients: [],
  manualItems: []
}

const ShoppingList = () => {
  // Allow user to select recipies or ingredients.
  // The ingredients are then grouped by ingredient type
  // and arranged to a shopping list.
  // The list is controlled via checkboxes and API
  // to save progress. Local storage can be used initially.
  // Maybe download it as an image?

  // Child components:
  // Ingredient selector, Recipe selector, Shopping list view
  // Custom item adder (maybe), could cause issues with data consistency.
  // Maybe implement it as an external array that is just amount name and unit.
  // with no link to actual ingredients.

  // Structure of shopping list:
  // List of ingredients (id, amount, unit, checked(later))
  // Option to group by recipies or ingredient types.
  // Below list of external ingredients (name, amount, unit, checked(later))
  // Macro summary (behind a toggle)

  const dispatch = useAppDispatch()
  const onSubmit = async (data: ShoppingListForm) => {
    console.log(data)
    const mappedData = flattenShoppingListForm(data)
    dispatch(upsertShoppingList(mappedData))
    const result = await dispatch(upsertShoppingList(mappedData)).unwrap()
    console.log(mappedData)
    reset(result)
  }

  const form = useForm<ShoppingListForm>({
    defaultValues,
    onSubmit
  })
  const { reset } = form

  return (
    <Form form={form}>
      <Grid container spacing={2} maxWidth={500} justifySelf={'center'}>
        <div>Shopping list component</div>
        <Grid size={{ xs: 12 }}>
          <DateInput name='date' label='Date' defaultValue={new Date()} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box>Automatically add ingredients of recipies</Box>
          <AddRecipeToList />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box>Add ingredients manually</Box>
          <AddManualIngredient />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box>Add items manually</Box>
          <AddManualItem />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SummarisedList />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button fullWidth variant='contained' type='submit'>
            Save list
          </Button>
        </Grid>
      </Grid>
    </Form>
  )
}
export default ShoppingList
