import type { Macros } from './Macros'

export type Ingredient = {
  id: number
  name: string
  nameFi?: string
  macros: Macros
  type: number
}

export type FormIngredient = Omit<Ingredient, 'id'> & { id?: number }
