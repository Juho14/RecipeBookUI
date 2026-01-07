import { Button, Grid } from '@mui/material'
import CookingProcess from './CookingProcess'
import Header from './Header'
import Ingredients from './Ingredients'
import Nutrients from './Nutrients'
import GlobalDialog from '../../layout/dialog/GlobalDialog'
import RecipeSelector from './RecipeSelector'
import { useState } from 'react'

const Recipes = () => {


  const [showRecipeDialog, setShowRecipeDialog] = useState(false)
  const handleOpen = () => setShowRecipeDialog(true)
  const handleClose = () => setShowRecipeDialog(false)

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
        <Grid size={{ xs: 12 }}>
          <Ingredients />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <CookingProcess />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Nutrients />
        </Grid>
      </Grid>
      <GlobalDialog title='Select recipe' isOpen={showRecipeDialog} onClose={handleClose} content={RecipeSelector} />
    </>
  )
}
export default Recipes
