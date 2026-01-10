import type { Ingredient } from '../../../types/ingredients/Ingredient'
import { INGREDIENT_TYPE } from '../../../types/ingredients/IngredientTypes'

// Macros displayed as per 100g
export const INGREDIENTS: Record<string, Ingredient> = {
  TOMATO: {
    name: 'Tomato',
    type: INGREDIENT_TYPE.VEGETABLE,
    macros: {
      kcal: 18,
      fats: { total: 0.2, saturated: 0 },
      carbs: { total: 3.9, sugars: 2.6 },
      protein: 0.9,
      salt: 0.01,
    },
  },
  CHICKEN_STRIPS: {
    name: 'Chicken strips',
    type: INGREDIENT_TYPE.PROTEIN,
    macros: {
      kcal: 110,
      fats: { total: 2.1, saturated: 0.5 },
      carbs: { total: 0, sugars: 0 },
      protein: 23,
      salt: 0.12,
    },
  },
  OLIVE_OIL: {
    name: 'Olive Oil',
    type: INGREDIENT_TYPE.OIL,
    macros: {
      kcal: 884,
      fats: { total: 100, saturated: 14 },
      carbs: { total: 0, sugars: 0 },
      protein: 0,
      salt: 0,
    },
  },
  SUGAR: {
    name: 'Sugar',
    type: INGREDIENT_TYPE.SWEETENER,
    macros: {
      kcal: 400,
      fats: { total: 0, saturated: 0 },
      carbs: { total: 100, sugars: 100 },
      protein: 0,
      salt: 0,
    },
  },
  JASMIN_RICE: {
    name: 'Jasmin rice',
    type: INGREDIENT_TYPE.CARBS,
    macros: {
      kcal: 347,
      fats: { total: 0.5, saturated: 0.2 },
      carbs: { total: 78, sugars: 0 },
      protein: 7,
      salt: 0,
    },
  },
}
