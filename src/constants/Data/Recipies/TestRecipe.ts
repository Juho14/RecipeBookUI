import type { Recipe } from '../../../types/Recipe/Recipe'
import { INGREDIENTS } from '../Ingredients/Ingredients'

export const TEST_RECIPE: Recipe = {
  id: 3,
  name: 'sdfg',
  slug: '',
  imgPath: '',
  time: '22',
  servings: 3,
  ingredients: [
    {
      ingredient: INGREDIENTS.CHICKEN_STRIPS,
      grams: 600,
      cookingUnit: 'g',
      amount: 0
    },
    {
      ingredient: INGREDIENTS.OLIVE_OIL,
      grams: 313.95,
      cookingUnit: 'tbsp',
      amount: 23
    }
  ],
  process: [
    {
      en: '23',
      fi: 'asdf'
    }
  ]
}
