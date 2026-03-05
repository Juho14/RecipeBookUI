import { Grid } from '@mui/material'
import CookingProcess from './CookingProcess'
import Header from './Header'
import Ingredients from './Ingredients'
import Nutrients from './nutrients/Nutrients'
import GlobalDialog from '../../layout/dialog/GlobalDialog'
import RecipeSelector from './RecipeSelector'
import { useState } from 'react'
import { useRecipe } from '../../hooks/recipes/useRecipe'

const Recipes = () => {
  const [showRecipeDialog, setShowRecipeDialog] = useState(false)
  const handleClose = () => setShowRecipeDialog(false)

  const { activeRecipe, showRecipe } = useRecipe()

  if (!showRecipe || !activeRecipe) return null

  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        textAlign={'center'}
        rowGap={2}
        rowSpacing={2}
      >
        <Grid>
          This page renders the recipies, their processes and nutrients
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Header recipe={activeRecipe} />
        </Grid>
        <Grid size={{ xs: 8 }}>
          <Ingredients recipe={activeRecipe} />
        </Grid>
        <Grid size={{ xs: 8 }}>
          <CookingProcess recipe={activeRecipe} />
        </Grid>
        <Grid size={{ xs: 8 }}>
          <Nutrients recipe={activeRecipe} />
        </Grid>
      </Grid>
      <GlobalDialog
        title='Select recipe'
        isOpen={showRecipeDialog}
        onClose={handleClose}
        content={RecipeSelector}
      />
    </>
  )
}
export default Recipes
