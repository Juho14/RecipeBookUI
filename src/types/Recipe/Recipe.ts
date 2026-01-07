import type { Ingredient } from "../ingredients/Ingredient";

export type RecipeIngredient = {
  ingredient: Ingredient;
  amount: number; // in grams
};

export type Recipe = {
  name: string;
  imgPath?: string;
  ingredients: RecipeIngredient[];
  time: string; // e.g., "30 min"
  process: string[]; // array of steps
  servings: number;
};
