import type { BaseRecipe } from '../../../types/Recipe/Recipe'
import { INGREDIENTS } from '../Ingredients/Ingredients'

export const PESTO_PASTA: BaseRecipe = {
  name: 'Pesto Pasta',
  slug: '/pasta/chicken-pesto',
  imgPath: '/images/pesto-pasta.jpg',
  servings: 2,
  time: '25 mins',
  ingredients: [
    {
      ingredient: INGREDIENTS.TOMATO,
      name: INGREDIENTS.TOMATO.name,
      grams: 200,
      cookingUnit: 'g'
    },
    {
      ingredient: INGREDIENTS.OLIVE_OIL,
      name: INGREDIENTS.OLIVE_OIL.name,
      grams: 20,
      cookingUnit: 'tbsp',
      amount: 1.5
    },
    {
      ingredient: INGREDIENTS.SUGAR,
      name: INGREDIENTS.SUGAR.name,
      grams: 5,
      cookingUnit: 'g'
    },
    {
      ingredient: INGREDIENTS.JASMIN_RICE,
      name: INGREDIENTS.JASMIN_RICE.name,
      grams: 180,
      cookingUnit: 'dl',
      amount: 2
    }
  ],
  steps: [
    { description: 'Cook the rice according to package instructions.' },
    {
      description: 'Mix olive oil with chopped tomatoes and sugar to create a simple sauce.'
    },
    {
      description: 'Combine the cooked rice with the sauce and stir in pesto (optional).'
    },
    { description: 'Serve hot with grated parmesan or fresh basil.' }
  ]
}
