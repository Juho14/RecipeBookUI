import { useFormContext, useWatch } from 'react-hook-form'
import { buildUnifiedIngredients } from '../../../utils/shoppingListUtils/buildUnifiedIngredients'
import { groupByIngredientId } from '../../../utils/shoppingListUtils/groupByIngredientId'
import { groupIngByRecipe } from '../../../utils/shoppingListUtils/groupIngByRecipe'
import type { ShoppingListForm } from '../../../types/shoppingList/ShoppingListForm'
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import IngredientTable from './IngredientTable'
import RecipeTable from './RecipeTable'
import { useState } from 'react'

type GroupMode = 'ingredient' | 'recipe'

const SummarisedList = () => {
  const { control } = useFormContext<ShoppingListForm>()
  const [groupMode, setGroupMode] = useState<GroupMode>('ingredient')

  const selectedRecipies = useWatch({
    name: 'selectedRecipies',
    control
  })

  const selectedIngredients = useWatch({
    name: 'selectedIngredients',
    control
  })

  const unifiedIngredients = buildUnifiedIngredients(
    selectedRecipies,
    selectedIngredients
  )

  const ingredientsById = groupByIngredientId(unifiedIngredients)
  const ingredientsByRecipe = groupIngByRecipe(unifiedIngredients)

  return (
    <Box mt={4}>
      <Box display='flex' justifyContent='space-between' mb={2}>
        <Typography variant='h6'>Shopping list</Typography>

        <ToggleButtonGroup
          value={groupMode}
          exclusive
          size='small'
          onChange={(_, value) => value && setGroupMode(value)}
        >
          <ToggleButton value='ingredient'>By ingredient</ToggleButton>
          <ToggleButton value='recipe'>By recipe</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {groupMode === 'ingredient' && (
        <IngredientTable ingredientsById={ingredientsById} />
      )}

      {groupMode === 'recipe' && (
        <RecipeTable ingredientsByRecipe={ingredientsByRecipe} />
      )}
    </Box>
  )
}

export default SummarisedList
