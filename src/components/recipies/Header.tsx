import type { AnyRecipe } from '../../types/Recipe/Recipe'

const Header = ({ recipe }: { recipe: AnyRecipe }) => {
  if (!recipe) return null

  return (
    <header>
      <h1>{recipe.name}</h1>
      {recipe.imgPath && <img src={recipe.imgPath} alt={recipe.name} />}
    </header>
  )
}
export default Header
