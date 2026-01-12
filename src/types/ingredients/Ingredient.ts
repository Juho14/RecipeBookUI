import type { IngredientTypeId } from './IngredientTypes'
import type { Macros } from './Macros'

export type Ingredient = {
  id: number
  name: string
  nameFi?: string
  macros: Macros
  density?: number
  type: IngredientTypeId
}

export type FormIngredient = Omit<Ingredient, 'id'> & {
  id?: IngredientTypeId
}
