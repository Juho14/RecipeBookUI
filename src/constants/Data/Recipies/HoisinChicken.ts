import type { Recipe } from '../../../types/Recipe/Recipe'
import { INGREDIENTS } from '../Ingredients/Ingredients'

export const HOISIN_CHICKEN: Recipe = {
  name: 'Hoisin Chicken',
  slug: '/asian/hoisin-chicken',
  imgPath: '/images/hoisin-chicken.jpg',
  servings: 3,
  time: '30 mins',
  ingredients: [
    { ingredient: INGREDIENTS.CHICKEN_STRIPS, grams: 600, cookingUnit: 'g' },
    {
      ingredient: INGREDIENTS.OLIVE_OIL,
      grams: 15,
      cookingUnit: 'tbsp',
      amount: 1,
    },
    { ingredient: INGREDIENTS.SUGAR, grams: 10, cookingUnit: 'g' },
    {
      ingredient: INGREDIENTS.JASMIN_RICE,
      grams: 240,
      cookingUnit: 'dl',
      amount: 2.5,
    },
  ],
  process: [
    { en: 'Preheat oven to 200°C (390°F).' },
    { en: 'Mix hoisin sauce with olive oil and sugar to make a glaze.' },
    {
      en: 'Coat the chicken breasts in the glaze and let marinate for 10 minutes.',
    },
    { en: 'Bake chicken for 20 minutes until cooked through.' },
    { en: 'Serve hot with steamed vegetables or rice.' },
  ],
}
