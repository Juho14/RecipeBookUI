import type { TFunction } from 'i18next'

export const CookingUnits = {
  GRAM: 1,
  MILLILITER: 2,
  TABLESPOON: 3,
  TEASPOON: 4,
  DECILITER: 5,
  LITER: 6
} as const

export type CookingUnit = (typeof CookingUnits)[keyof typeof CookingUnits]

export const cookingUnitOptions = (t: TFunction<'translation', undefined>) =>
  Object.values(CookingUnits).map((unit) => ({
    label: t(`cookingUnit.${unit}`),
    value: unit
  }))
