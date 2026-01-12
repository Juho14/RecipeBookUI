import { Box } from '@mui/material'
import DrawerNav from './navigation/Drawer'
import { Outlet } from 'react-router-dom'
import { GlobalSEO } from '../components/seo/GlobalSEO'

const Layout = () => {
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
