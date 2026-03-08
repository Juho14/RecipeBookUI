import type { Recipe } from '../../types/Recipe/Recipe'

const Header = ({ recipe }: { recipe: Recipe }) => {
  if (!recipe) return null

  return (
    <header>
      <h1>{recipe.name}</h1>
      {recipe.imgPath && <img src={recipe.imgPath} alt={recipe.name} />}
    </header>
  )
}
export default Header
