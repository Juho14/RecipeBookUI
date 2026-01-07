import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material'
import { PAGES } from '../../constants/Pages'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

const DrawerNav = () => {
  const drawerList = Object.keys(PAGES) as Array<keyof typeof PAGES>
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleOpen = () => setIsOpen(true)
  const closeDrawer = () => setIsOpen(false)

  const handleNavigate = (pageKey: keyof typeof PAGES) => {
    navigate(PAGES[pageKey])
    closeDrawer()
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          borderRadius: '50%',
          width: 56,
          height: 56,
          boxShadow: 3,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor='left' open={isOpen} onClose={closeDrawer}>
        <List sx={{ width: 250 }}>
          {drawerList.map((key) => (
            <ListItemButton key={key} onClick={() => handleNavigate(key)}>
              <ListItemText
                primary={key.charAt(0).toUpperCase() + key.slice(1)}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default DrawerNav
