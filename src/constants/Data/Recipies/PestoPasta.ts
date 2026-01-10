import type { Recipe } from '../../../types/Recipe/Recipe'
import { INGREDIENTS } from '../Ingredients/Ingredients'

export const PESTO_PASTA: Recipe = {
  name: 'Pesto Pasta',
  slug: '/pasta/chicken-pesto',
  imgPath: '/images/pesto-pasta.jpg',
  servings: 2,
  time: '25 mins',
  ingredients: [
    { ingredient: INGREDIENTS.TOMATO, amount: 200, unit: 'g' },
    { ingredient: INGREDIENTS.OLIVE_OIL, amount: 20, unit: 'tbsp', alt_amount: 1.5 },
    { ingredient: INGREDIENTS.SUGAR, amount: 5, unit: 'g' },
    { ingredient: INGREDIENTS.JASMIN_RICE, amount: 180, unit: 'dl', alt_amount: 2 },
  ],
  process: [
    'Cook the rice according to package instructions.',
    'Mix olive oil with chopped tomatoes and sugar to create a simple sauce.',
    'Combine the cooked rice with the sauce and stir in pesto (optional).',
    'Serve hot with grated parmesan or fresh basil.',
  ],
}
