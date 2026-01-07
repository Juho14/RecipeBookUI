import type { Macros } from "../../types/ingredients/Macros";
import { round } from "../NumberUtils/Round";

export const roundMacros = (macros: Macros, decimals = 2): Macros => ({
  energy: {
    kj: round(macros.energy.kj, decimals),
    kcal: round(macros.energy.kcal, decimals),
  },
  fats: {
    total: round(macros.fats.total, decimals),
    saturated: round(macros.fats.saturated, decimals),
  },
  carbs: {
    total: round(macros.carbs.total, decimals),
    sugars: round(macros.carbs.sugars, decimals),
  },
  protein: round(macros.protein, decimals),
  salt: round(macros.salt, decimals),
})
