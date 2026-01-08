import { Button, Grid } from '@mui/material'
import CookingProcess from './CookingProcess'
import Header from './Header'
import Ingredients from './Ingredients'
import Nutrients from './nutrients/Nutrients'
import GlobalDialog from '../../layout/dialog/GlobalDialog'
import RecipeSelector from './RecipeSelector'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setActiveRecipe } from '../../store/recipeSlice'
import { RECIPE_LIST } from '../../constants/Data/Recipies/RecipeList'

const Recipes = () => {
  const [showRecipeDialog, setShowRecipeDialog] = useState(false)
  const handleOpen = () => setShowRecipeDialog(true)
  const handleClose = () => setShowRecipeDialog(false)
  const dispatch = useDispatch()
  const { category, recipe: recipeSlug } = useParams<{
    category?: string
    recipe?: string
  }>()

  // Find the recipe based on slug
  const recipe = RECIPE_LIST.find(
    (r) => r.slug === `/${category}/${recipeSlug}`
  )
  if (recipe) dispatch(setActiveRecipe(recipe))

  return (
    <>
      <Grid container justifyContent={'center'} textAlign={'center'}>
        <Grid>This is the front page of the Recipes</Grid>
        <Grid size={{ xs: 12 }}>
          <Button variant='contained' onClick={handleOpen}>
            List of Recipes
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Header />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Ingredients />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <CookingProcess />
        </Grid>
        <Grid size={{ xs: 8 }}>
          <Nutrients />
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
