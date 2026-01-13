import { useFieldArray, useFormContext } from 'react-hook-form'
import { Button, Grid } from '@mui/material'
import { RECIPE_LIST } from '../../../constants/Data/Recipies/RecipeList'
import CheckboxInput from '../../form/inputs/Checkbox'
import type { Recipe } from '../../../types/Recipe/Recipe'
import type { ShoppingListForm } from '../../../types/shoppingList/ShoppingListForm'

interface AddRecipeDialogProps {
  onClose: () => void
}
const AddRecipeDialog = ({ onClose }: AddRecipeDialogProps) => {
  const { control } = useFormContext<ShoppingListForm>()
  const {
    fields: recipeList,
    append,
    remove
  } = useFieldArray<ShoppingListForm, 'selectedRecipies', 'fieldId'>({
    control,
    name: 'selectedRecipies',
    keyName: 'fieldId'
  })

  const handleAddRecipe = (selectedRecipe: Recipe) => {
    const existingIndex = recipeList.findIndex(
      (recipe) => recipe.id === selectedRecipe.id
    )

    if (existingIndex === -1) {
      append(selectedRecipe)
    } else {
      remove(existingIndex)
    }
  }

  return (
    <Grid container spacing={2} maxWidth={500} justifySelf='center'>
      {RECIPE_LIST.map((recipe) => {
        const isChecked = recipeList.some((r) => r.id === recipe.id)
        return (
          <Grid
            key={recipe.id}
            size={{ xs: 6 }}
            sx={{ border: '1px solid black', p: 1 }}
          >
            <Grid container alignItems='center'>
              <Grid size={{ xs: 8 }}>{recipe.name}</Grid>
              <Grid size={{ xs: 4 }} textAlign='right'>
                <CheckboxInput
                  name='addRecipe'
                  label=''
                  checked={isChecked}
                  onChange={() => handleAddRecipe(recipe)}
                />
              </Grid>
            </Grid>
          </Grid>
        )
      })}
      <Grid size={{ xs: 12 }} textAlign={'center'}>
        <Button variant='contained' onClick={onClose}>
          Confirm
        </Button>
      </Grid>
    </Grid>
  )
}
export default AddRecipeDialog
