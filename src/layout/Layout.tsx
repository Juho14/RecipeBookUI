import { Box } from '@mui/material'
import DrawerNav from './navigation/Drawer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Box display='flex' minHeight='100vh'>
      <DrawerNav />
      <Box component='main' flexGrow={1} p={3}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
