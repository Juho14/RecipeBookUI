import { Box, Button, Chip, Stack } from '@mui/material'
import GlobalDialog from '../../../layout/dialog/GlobalDialog'
import { useState } from 'react'
import AddRecipeDialog from './AddRecipeDialog'
import type { ShoppingListForm } from '../../../types/shoppingList/ShoppingListForm'
import { useFormContext, useWatch } from 'react-hook-form'

const AddRecipeToList = () => {
  const { control } = useFormContext<ShoppingListForm>()
  const selectedRecipies = useWatch({
    control,
    name: 'selectedRecipies'
  })

  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={toggleOpen} variant='contained'>
        Add Recipies
      </Button>
      <Box mt={2}>
        {selectedRecipies && selectedRecipies.length > 0 ? (
          <Stack direction='row' spacing={1} flexWrap='wrap'>
            {selectedRecipies.map((recipe) => (
              <Chip key={recipe.id} label={recipe.name} color='primary' />
            ))}
          </Stack>
        ) : (
          <Box>No recipes selected</Box>
        )}
      </Box>
      <GlobalDialog
        title='Add recipies to shopping list'
        isOpen={open}
        onClose={handleClose}
        content={AddRecipeDialog}
      />
    </>
  )
}

export default AddRecipeToList
