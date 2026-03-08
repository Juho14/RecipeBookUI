import { Box } from '@mui/material'
import DrawerNav from './navigation/builder/Drawer'
import { Outlet } from 'react-router-dom'
import { GlobalSEO } from '../components/seo/GlobalSEO'
import { useAppDispatch } from '../store/hooks'
import { useEffect } from 'react'
import { fetchGroupedRecipes } from '../fetches/recipes'

const Layout = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGroupedRecipes())
  }, [])

  return (
    <Box display='flex' minHeight='100vh'>
      <GlobalSEO />
      <DrawerNav />
      <Box component='main' flexGrow={1} p={3}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
