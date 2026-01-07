import type { Ingredient } from "../ingredients/Ingredient";

export type RecipeIngredient = {
  ingredient: Ingredient;
  amount: number;
  unit: string;
};

export type Recipe = {
  name: string;
  imgPath?: string;
  ingredients: RecipeIngredient[];
  time: string; 
  process: string[];
  servings: number;
};
