import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

const Ingredients = () => {
  const recipe = useSelector((state: RootState) => state.recipe.activeRecipe)
  if (!recipe) return null

  return (
    <>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map(({ ingredient, amount, alt_amount, unit }) => (
          <li key={ingredient.name}>
            {ingredient.name} – {alt_amount ?? amount} {unit}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Ingredients
