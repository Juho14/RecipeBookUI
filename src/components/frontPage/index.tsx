import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'

const FrontPage = () => {
  const { t } = useTranslation()
  return (
    <Grid container spacing={2} justifyContent={'center'} textAlign={'center'}>
      <Grid size={{ xs: 12 }}>
        <h3> Hey, this is a recipe page for Juho</h3>
        <h3>{t('common.welcome')}</h3>
      </Grid>
      <Grid size={{xs: 12}}>
        <p>FrontPage cooooolll</p>
      </Grid>
    </Grid>
  )
}

export default FrontPage
