import type { Ingredient } from '../../../types/ingredients/Ingredient'
import { INGREDIENT_TYPE } from '../../../types/ingredients/IngredientTypes'

// Macros displayed as per 100g
// If label shows as per ml, density is equal to 1
export const INGREDIENTS: Record<string, Ingredient> = {
  TOMATO: {
    id: 1,
    name: 'Tomato',
    type: INGREDIENT_TYPE.VEGETABLE,
    macros: {
      kcal: 18,
      fats: { total: 0.2, saturated: 0 },
      carbs: { total: 3.9, sugars: 2.6 },
      protein: 0.9,
      salt: 0.01,
      fiber: 1.2
    }
  },
  CHICKEN_STRIPS: {
    id: 2,
    name: 'Chicken strips',
    type: INGREDIENT_TYPE.PROTEIN,
    macros: {
      kcal: 110,
      fats: { total: 2.1, saturated: 0.5 },
      carbs: { total: 0, sugars: 0 },
      protein: 23,
      salt: 0.12,
      fiber: 0
    }
  },
  OLIVE_OIL: {
    id: 3,
    name: 'Olive Oil',
    type: INGREDIENT_TYPE.OIL,
    macros: {
      kcal: 884,
      fats: { total: 100, saturated: 14 },
      carbs: { total: 0, sugars: 0 },
      protein: 0,
      salt: 0,
      fiber: 0
    },
    density: 0.91
  },
  SUGAR: {
    id: 4,
    name: 'Sugar',
    type: INGREDIENT_TYPE.SWEETENER,
    macros: {
      kcal: 400,
      fats: { total: 0, saturated: 0 },
      carbs: { total: 100, sugars: 100 },
      protein: 0,
      salt: 0,
      fiber: 0
    }
  },
  JASMIN_RICE: {
    id: 5,
    name: 'Jasmin rice',
    type: INGREDIENT_TYPE.CARBS,
    macros: {
      kcal: 347,
      fats: { total: 0.5, saturated: 0.2 },
      carbs: { total: 78, sugars: 0 },
      protein: 7,
      salt: 0,
      fiber: 0
    }
  },
  COCHUJANG: {
    id: 6,
    name: 'Gochujang',
    type: INGREDIENT_TYPE.SAUCE,
    macros: {
      kcal: 208,
      fats: { total: 0.6, saturated: 0.1 },
      carbs: { total: 46.7, sugars: 31.2 },
      protein: 3.5,
      salt: 5,
      fiber: 0
    },
    density: 1.11
  },
  SOY_SAUCE: {
    id: 7,
    name: 'Soy sauce',
    type: INGREDIENT_TYPE.SAUCE,
    macros: {
      kcal: 52,
      fats: { total: 0, saturated: 0 },
      carbs: { total: 6.7, sugars: 1.4 },
      protein: 6.1,
      salt: 14,
      fiber: 0
    },
    density: 1
  },
    HOISIN_SAUCE: {
    id: 8,
    name: 'Hoisin sauce',
    type: INGREDIENT_TYPE.SAUCE,
    macros: {
      kcal: 228,
      fats: { total: 3.7, saturated: 0.7 },
      carbs: { total: 47, sugars: 40 },
      protein: 1.6,
      salt: 5.31,
      fiber: 0
    },
    density: 1.16
  },
   SESAME_OIL: {
    id: 9,
    name: 'Sesame Oil',
    type: INGREDIENT_TYPE.OIL,
    macros: {
      kcal: 900 ,
      fats: { total: 100, saturated: 13 },
      carbs: { total: 0, sugars: 0 },
      protein: 0,
      salt: 0,
      fiber: 0
    },
    density: 1
  },

}
