import { useAppSelector } from '../../store/hooks'

export const useIngredientNameMap = () => {
  const ingredients = useAppSelector((state) => state.ingredients.data)
  const ingredientNameMap: Record<number, string> = {}

  ingredients.forEach((ingredient) => {
    ingredientNameMap[ingredient.id] = ingredient.name
  })

  const getIngredientName = (id: number) => ingredientNameMap[id] || `ID ${id}`

  return { ingredientNameMap, getIngredientName }
}
