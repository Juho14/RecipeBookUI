import { List, ListItemButton, ListItemText } from '@mui/material'
import type { Recipe } from '../../types/Recipe/Recipe'
import { useDispatch } from 'react-redux'
import { setActiveRecipe } from '../../store/recipe/recipeSlice'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

interface RecipeSelectorProps {
  onClose: () => void
}

const RecipeSelector = ({ onClose }: RecipeSelectorProps) => {
  const dispatch = useDispatch()
  const recipes = useAppSelector((state) => state.recipe.data)

  const navigate = useNavigate()
  const handleSelectRecipe = (recipe: Recipe) => {
    dispatch(setActiveRecipe(recipe))
    navigate(`recipes/${recipe.id}`)
    onClose()
  }

  return (
    <>
      <List>
        {recipes.map((recipe) => (
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
