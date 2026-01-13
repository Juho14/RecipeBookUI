import { Button } from '@mui/material'
import GlobalDialog from '../../../layout/dialog/GlobalDialog'
import type { Recipe } from '../../../types/Recipe/Recipe'
import { useState } from 'react'

interface AddRecipeToListProps {
  recipeList: Recipe[]
}

const AddRecipeToList = ({ recipeList }: AddRecipeToListProps) => {
  console.log(recipeList)
  const [open, setOpen] = useState(false)

  const handleAddRecipies = (selectedRecipies: Recipe[]) => {
    selectedRecipies.forEach((recipe)=> {
      console.log(recipe)
      // Need to add IDs for recipies. Only add Recipies that
      // do not already exist in the list. Can even be done inside
      // the list rendered inside the GlobalDialog.
    })
  }

  return (
    <>
      <Button> Add Recipies</Button>
      <GlobalDialog />
    </>
  )
}

export default AddRecipeToList
