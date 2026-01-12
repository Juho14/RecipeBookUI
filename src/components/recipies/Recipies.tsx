import { Grid } from '@mui/material'
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
import { GlobalSEO } from '../seo/GlobalSEO'

const Recipes = () => {
  const [showRecipeDialog, setShowRecipeDialog] = useState(false)
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
          <Header />
        </Grid>
        <Grid size={{ xs: 8 }}>
          <Ingredients />
        </Grid>
        <Grid size={{ xs: 8 }}>
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
