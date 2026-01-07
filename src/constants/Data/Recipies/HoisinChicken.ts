import type { Recipe } from "../../../types/Recipe/Recipe";
import { INGREDIENTS } from "../../Ingredients";

export const HOISIN_CHICKEN: Recipe = {
  name: "Hoisin Chicken",
  imgPath: "/images/hoisin-chicken.jpg",
  servings: 2,
  time: "30 mins",
  ingredients: [
    { ingredient: INGREDIENTS.CHICKEN_BREAST, amount: 300, unit: 'g' },
    { ingredient: INGREDIENTS.OLIVE_OIL, amount: 15, unit: 'g'},
    { ingredient: INGREDIENTS.SUGAR, amount: 10, unit: 'g' },
    { ingredient: INGREDIENTS.TOMATO, amount: 2, unit: 'pcs'},
  ],
  process: [
    "Preheat oven to 200°C (390°F).",
    "Mix hoisin sauce with olive oil and sugar to make a glaze.",
    "Coat the chicken breasts in the glaze and let marinate for 10 minutes.",
    "Bake chicken for 20 minutes until cooked through.",
    "Serve hot with steamed vegetables or rice.",
  ],
}
