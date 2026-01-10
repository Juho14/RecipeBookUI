import { Grid } from '@mui/material'

const FrontPage = () => {
  
  return (
    <Grid container spacing={2} justifyContent={'center'} textAlign={'center'}>
      <Grid size={{ xs: 12 }}>
        <h3> Hey, this is a recipe page for Juho</h3>
      </Grid>
      <Grid size={{xs: 12}}>
        <p>FrontPage cooooolll</p>
      </Grid>
    </Grid>
  )
}

export default FrontPage
