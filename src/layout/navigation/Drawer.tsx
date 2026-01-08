import { Button, Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../types/navigation/PageConfig'
import DrawerSearch from './DrawerSearch'
import RecipeList from './RecipeList'
import GlobalDialog from '../dialog/GlobalDialog'
import RecipeSelector from '../../components/recipies/RecipeSelector'

const DrawerNav = () => {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
    setOpen(false)
  }

  const allRecipePages = useMemo(() => {
    return PAGES.flatMap((page) => {
      if ('children' in page && page.isRecipe) {
        return page.children.map((child) => ({
          ...child,
          parentLabel: page.label,
        }))
      }
      return []
    })
  }, [])

  const filteredRecipes = useMemo(() => {
    if (!searchTerm) return allRecipePages
    const term = searchTerm.toLowerCase()
    return allRecipePages.filter(
      (recipe) =>
        recipe.label.toLowerCase().includes(term) ||
        recipe.path.toLowerCase().includes(term) ||
        recipe.parentLabel?.toLowerCase().includes(term)
    )
  }, [searchTerm, allRecipePages])

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
        <RecipeList
          recipes={searchTerm ? filteredRecipes : (PAGES as any)}
          onNavigate={handleNavigate}
        />
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
