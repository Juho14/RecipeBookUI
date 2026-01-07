import type { Ingredient } from "../types/ingredients/Ingredient";

export const INGREDIENTS: Record<string, Ingredient> = {
  TOMATO: {
    name: "Tomato",
    macros: {
      energy: { kj: 74, kcal: 18 },
      fats: { total: 0.2, saturated: 0 },
      carbs: { total: 3.9, sugars: 2.6 },
      protein: 0.9,
      salt: 0.01,
    },
  },
  CHICKEN_BREAST: {
    name: "Chicken Breast",
    macros: {
      energy: { kj: 650, kcal: 155 },
      fats: { total: 3.6, saturated: 1 },
      carbs: { total: 0, sugars: 0 },
      protein: 31,
      salt: 0.1,
    },
  },
  OLIVE_OIL: {
    name: "Olive Oil",
    macros: {
      energy: { kj: 3700, kcal: 884 },
      fats: { total: 100, saturated: 14 },
      carbs: { total: 0, sugars: 0 },
      protein: 0,
      salt: 0,
    },
  },
  SUGAR: {
    name: "Sugar",
    macros: {
      energy: { kj: 1700, kcal: 400 },
      fats: { total: 0, saturated: 0 },
      carbs: { total: 100, sugars: 100 },
      protein: 0,
      salt: 0,
    },
  },
};
