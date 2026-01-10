import type { Macros } from './Macros'

export type Ingredient = {
  id: number
  name: string
  nameFi?: string
  macros: Macros
  type: number
}
