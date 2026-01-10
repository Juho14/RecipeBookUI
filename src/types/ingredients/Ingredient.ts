import type { Macros } from "./Macros";

export type Ingredient = {
  name: string;
  nameEn?: string;
  macros: Macros;
  type: number
};
