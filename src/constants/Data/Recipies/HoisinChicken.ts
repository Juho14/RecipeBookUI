import type { Recipe } from '../../../types/Recipe/Recipe'
import { INGREDIENTS } from '../../Ingredients'

export const HOISIN_CHICKEN: Recipe = {
  name: 'Hoisin Chicken',
  slug: '/asian/hoisin-chicken',
  imgPath: '/images/hoisin-chicken.jpg',
  servings: 3,
  time: '30 mins',
  ingredients: [
    { ingredient: INGREDIENTS.CHICKEN_STRIPS, amount: 600, unit: 'g' },
    {
      ingredient: INGREDIENTS.OLIVE_OIL,
      amount: 15,
      unit: 'tbsp',
      alt_amount: 1,
    },
    { ingredient: INGREDIENTS.SUGAR, amount: 10, unit: 'g' },
    {
      ingredient: INGREDIENTS.JASMIN_RICE,
      amount: 240,
      unit: 'dl',
      alt_amount: 2.5,
    },
  ],
  process: [
    'Preheat oven to 200°C (390°F).',
    'Mix hoisin sauce with olive oil and sugar to make a glaze.',
    'Coat the chicken breasts in the glaze and let marinate for 10 minutes.',
    'Bake chicken for 20 minutes until cooked through.',
    'Serve hot with steamed vegetables or rice.',
  ],
}
