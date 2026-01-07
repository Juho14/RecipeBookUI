import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

const Header = () => {
  const recipe = useSelector((state: RootState) => state.recipe.activeRecipe)

  if (!recipe) return null

  return (
    <header>
      <h1>{recipe.name}</h1>
      {recipe.imgPath && <img src={recipe.imgPath} alt={recipe.name} />}
    </header>
  )
}
export default Header
