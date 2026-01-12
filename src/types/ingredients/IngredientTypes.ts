export type IngredientType = {
  id: number
  name: string
}

export const INGREDIENT_TYPE = {
  VEGETABLE: 1,
  PROTEIN: 2,
  CARBS: 3,
  SAUCE: 4,
  OIL: 5,
  SWEETENER: 6,
  SEASONING: 7
} as const
