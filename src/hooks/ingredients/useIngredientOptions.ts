import type { Ingredient } from '../../types/ingredients/Ingredient'

// To be used with API.
// export function getIngredientOptions(ingredients: Ingredient[]) {
//   const options: SelectOption<number>[] = Object.values(ingredients).map(
//     (ingredient) => ({
//       value: ingredient.id,
//       label: ingredient.name,
//       density: ingredient.density
//     })
//   )

//   return options
// }


export function getIngredientOptions(
  ingredients: Record<string, Ingredient>
) {
  return Object.values(ingredients).map((ingredient) => ({
    value: ingredient.id,
    label: ingredient.name
  }))
}
