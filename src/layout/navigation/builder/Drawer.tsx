import { Button, Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mergePages } from '../types/PageConfig'
import DrawerSearch from '../DrawerSearch'
import GlobalDialog from '../../dialog/GlobalDialog'
import RecipeSelector from '../../../components/recipies/RecipeSelector'
import LangSelector from '../LangSelector'
import { useAppSelector } from '../../../store/hooks'
import { selectRecipePages } from '../../../utils/recipeUtils/selectRecipePages'
import NavItems from './NavItems'

const DrawerNav = () => {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const recipePages = useAppSelector(selectRecipePages)
  const pages = mergePages(recipePages)

  const handleNavigate = (path: string) => {
    navigate(path)
    setOpen(false)
  }

  const [showRecipeDialog, setShowRecipeDialog] = useState(false)

  const handleOpenRecipeDialog = () => setShowRecipeDialog(true)
  const handleCloseRecipeDialog = () => {
    setShowRecipeDialog(false)
    setOpen(false)
  }

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ position: 'fixed', top: 16, left: 16 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          sx={{ mb: 2 }}
          onClick={handleOpenRecipeDialog}
        >
          All recipies
        </Button>
        <DrawerSearch value={searchTerm} onChange={setSearchTerm} />
        <NavItems pages={pages} onNavigate={handleNavigate} />
        <LangSelector />
      </Drawer>
      <GlobalDialog
        title='Select Recipe'
        isOpen={showRecipeDialog}
        onClose={handleCloseRecipeDialog}
        content={RecipeSelector}
      />
    </>
  )
}

export default DrawerNav
