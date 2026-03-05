import type { BaseRecipe } from '../../../types/Recipe/Recipe'
import { INGREDIENTS } from '../Ingredients/Ingredients'

export const TEST_RECIPE: BaseRecipe = {
  name: 'sdfg',
  slug: '',
  imgPath: '',
  time: '22',
  servings: 3,
  ingredients: [
    {
      ingredient: INGREDIENTS.CHICKEN_STRIPS,
      name: INGREDIENTS.CHICKEN_STRIPS.name,
      grams: 600,
      cookingUnit: 'g',
      amount: 0
    },
    {
      ingredient: INGREDIENTS.OLIVE_OIL,
      name: INGREDIENTS.OLIVE_OIL.name,
      grams: 313.95,
      cookingUnit: 'tbsp',
      amount: 23
    }
  ],
  steps: [
    {
      description: '23',
      descriptionFi: 'asdf'
    }
  ]
}
