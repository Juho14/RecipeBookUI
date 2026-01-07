import { numericMacroKeys, objectMacroKeys, type Macros } from "../../types/ingredients/Macros";
import type { Recipe } from "../../types/Recipe/Recipe";
import { addNestedMacros } from "./NestedMacros";

export const calculateMacros = (recipe: Recipe) => {
  const total: Macros = {
    energy: { kj: 0, kcal: 0 },
    fats: { total: 0, saturated: 0 },
    carbs: { total: 0, sugars: 0 },
    protein: 0,
    salt: 0,
  };

  // 1️⃣ Calculate total macros
  for (const { ingredient, amount } of recipe.ingredients) {
    const factor = amount / 100;

    // Object macros (energy, fats, carbs)
    objectMacroKeys.forEach((key) => {
      addNestedMacros(total[key], ingredient.macros[key], factor);
    });

    // Numeric macros (protein, salt)
    numericMacroKeys.forEach((key) => {
      total[key] += ingredient.macros[key] * factor;
    });
  }

  const perServing: Macros = {
    energy: { ...total.energy },
    fats: { ...total.fats },
    carbs: { ...total.carbs },
    protein: total.protein,
    salt: total.salt,
  };

  objectMacroKeys.forEach((key) => {
    addNestedMacros(perServing[key], total[key], 1 / recipe.servings);
  });

  numericMacroKeys.forEach((key) => {
    perServing[key] /= recipe.servings;
  });

  return { total, perServing };
};
