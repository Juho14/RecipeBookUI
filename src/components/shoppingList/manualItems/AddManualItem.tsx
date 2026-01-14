import { Button, Grid, IconButton } from '@mui/material'
import { useFieldArray, useFormContext } from 'react-hook-form'
import type {
  ManualItems,
  ShoppingListForm
} from '../../../types/shoppingList/ShoppingListForm'
import TextInput from '../../form/inputs/TextInput'
import DeleteIcon from '@mui/icons-material/Delete'
import { Fragment } from 'react/jsx-runtime'

const defaultItem: ManualItems = {
  name: '',
  amount: 1,
  unit: ''
}

const AddManualItem = () => {
  const { control } = useFormContext<ShoppingListForm>()

  const {
    fields: itemList,
    append,
    remove
  } = useFieldArray<ShoppingListForm, 'manualItems', 'fieldId'>({
    control,
    name: 'manualItems',
    keyName: 'fieldId'
  })

  const handleAddItem = () => {
    append(defaultItem)
  }

  return (
    <Grid container spacing={2} maxWidth={500} justifySelf='center'>
      {itemList.map((item, index) => {
        return (
          <Fragment key={item.fieldId}>
            <Grid size={{ xs: 3.5 }}>
              <TextInput name={`manualItems.${index}.name`} label='Name' />
            </Grid>
            <Grid size={{ xs: 3.5 }}>
              <TextInput
                name={`manualItems.${index}.amount`}
                label='Amount'
                type='number'
              />
            </Grid>
            <Grid size={{ xs: 3.5 }}>
              <TextInput name={`manualItems.${index}.unit`} label='Unit' />
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
        <Button variant='contained' onClick={handleAddItem}>
          Add manual item
        </Button>
      </Grid>
    </Grid>
  )
}

export default AddManualItem
