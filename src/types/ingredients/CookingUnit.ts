export type CookingUnit = 'g' | 'ml' | 'tbsp' | 'tsp' | 'dl' | 'l'

export const COOKING_UNITS: readonly CookingUnit[] = [
  'g',
  'ml',
  'tbsp',
  'tsp',
  'dl',
  'l'
] as const
