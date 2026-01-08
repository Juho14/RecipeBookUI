import { List, ListItemButton, ListItemText } from '@mui/material'
import { RECIPE_LIST } from '../../constants/Data/Recipies/RecipeList'
import type { Recipe } from '../../types/Recipe/Recipe'
import { useDispatch } from 'react-redux'
import { setActiveRecipe } from '../../store/recipeSlice'
import { useNavigate } from 'react-router-dom'

interface RecipeSelectorProps {
  onClose: () => void
}

const RecipeSelector = ({ onClose }: RecipeSelectorProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSelectRecipe = (recipe: Recipe) => {
    dispatch(setActiveRecipe(recipe))
    navigate(`recipes/${recipe.slug}`)
    onClose()
  }

  return (
    <>
      <List>
        {RECIPE_LIST.map((recipe) => (
          <ListItemButton
            key={recipe.name}
            onClick={() => handleSelectRecipe(recipe)}
          >
            <ListItemText primary={recipe.name} />
          </ListItemButton>
        ))}
      </List>
    </>
  )
}
export default RecipeSelector
