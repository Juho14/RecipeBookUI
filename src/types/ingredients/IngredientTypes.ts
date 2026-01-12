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
  SEASONING: 7,
  DAIRY: 8,
  FRUIT: 9,
  NUTS_AND_SEEDS: 10,
  LEGUMES: 11,
  GRAINS: 12,
  HERBS: 13,
  SPICES: 14
} as const

export type IngredientTypeId =
  (typeof INGREDIENT_TYPE)[keyof typeof INGREDIENT_TYPE]

export const AUTO_LIQUID_TYPES: readonly IngredientTypeId[] = [
  INGREDIENT_TYPE.SAUCE,
  INGREDIENT_TYPE.OIL
] as const

export const MANUAL_LIQUID_TYPES: readonly IngredientTypeId[] = [
  INGREDIENT_TYPE.DAIRY,
  INGREDIENT_TYPE.SWEETENER
] as const

export const isAutoLiquidType = (type: IngredientTypeId): boolean =>
  AUTO_LIQUID_TYPES.includes(type)

export const needsLiquidOverride = (type: IngredientTypeId): boolean =>
  MANUAL_LIQUID_TYPES.includes(type)
