import { Grid } from '@mui/material'
import CookingProcess from './CookingProcess'
import Header from './Header'
import Ingredients from './Ingredients'
import Nutrients from './nutrients/Nutrients'
import GlobalDialog from '../../layout/dialog/GlobalDialog'
import RecipeSelector from './RecipeSelector'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { setActiveRecipe } from '../../store/recipeSlice'
import {
  getRecipeFromParams,
  type RecipeLookup
} from '../../utils/recipeUtils/getRecipeFromParams'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RECIPE_LIST } from '../../constants/Data/Recipies/RecipeList'
import { fetchRecipeDetails } from '../../fetches/recipes'

const Recipes = () => {
  const [showRecipeDialog, setShowRecipeDialog] = useState(false)
  const handleClose = () => setShowRecipeDialog(false)
  const dispatch = useAppDispatch()
  const { param1, param2 } = useParams<{ param1?: string; param2?: string }>()

  let id: string | undefined
  let category: string | undefined
  let recipeSlug: string | undefined

  if (!param2 && param1) {
    id = param1
  } else {
    category = param1
    recipeSlug = param2
  }
  useEffect(() => {
    console.log(id)
    if (id) dispatch(fetchRecipeDetails(parseInt(id)))
  }, [category, recipeSlug, id])

  const addedRecipies = useAppSelector((state) => state.recipe.data)
  const baseRecipes = RECIPE_LIST

  const recipeLookup: RecipeLookup = {}

  baseRecipes.forEach((r) => {
    recipeLookup[r.slug.toLowerCase()] = r
  })

  addedRecipies.forEach((r) => {
    recipeLookup[r.id.toString()] = r
  })
  const recipe = getRecipeFromParams(
    { category, recipe: recipeSlug, id },
    recipeLookup
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
