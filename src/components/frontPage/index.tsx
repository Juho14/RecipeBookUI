import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { fetchGroupedRecipes } from '../../fetches/recipes'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import type { RootState } from '../../store'

const FrontPage = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGroupedRecipes())
  }, [])
  const recipes = useAppSelector((state: RootState) => state.recipe.data)
  console.log(recipes)
  return (
    <Grid container spacing={2} justifyContent={'center'} textAlign={'center'}>
      <Grid size={{ xs: 12 }}>
        <h3> Hey, this is a recipe page for Juho</h3>
        <h3>{t('common.welcome')}</h3>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <p>FrontPage cooooolll</p>
      </Grid>
    </Grid>
  )
}

export default FrontPage
