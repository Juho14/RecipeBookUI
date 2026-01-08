import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

const CookingProcess = () => {
  const recipe = useSelector((state: RootState) => state.recipe.activeRecipe)
  if (!recipe) {
    return <p>No recipe selected</p>
  }
 return (
    <>
      <h3>Cooking process</h3>
      <ul>
        {recipe.process.map((process) => (
          <li key={process}>
            {process}
          </li>
        ))}
      </ul>
    </>
  )}
export default CookingProcess
