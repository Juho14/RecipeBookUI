export type Energy = { kj: number; kcal: number };
export type Fats = { total: number; saturated: number };
export type Carbs = { total: number; sugars: number };

export type Macros = {
  energy: Energy;
  fats: Fats;
  carbs: Carbs;
  protein: number;
  salt: number;
};


export const objectMacroKeys: (keyof Pick<Macros, "energy" | "fats" | "carbs">)[] = [
  "energy",
  "fats",
  "carbs",
];

export const numericMacroKeys: (keyof Pick<Macros, "protein" | "salt">)[] = [
  "protein",
  "salt",
];
