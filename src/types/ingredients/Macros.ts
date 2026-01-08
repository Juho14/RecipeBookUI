export type Fats = { total: number; saturated: number }
export type Carbs = { total: number; sugars: number }

export type Macros = {
  kcal: number
  fats: Fats
  carbs: Carbs
  protein: number
  salt: number
}

export const objectMacroKeys = ['fats', 'carbs'] as const
export const numericMacroKeys = ['kcal', 'protein', 'salt'] as const
