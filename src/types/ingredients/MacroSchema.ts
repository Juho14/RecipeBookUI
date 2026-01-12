export type MacroSchema =
  | {
      type: 'number'
      key: 'kcal' | 'protein' | 'salt' | 'fiber'
      label: string
    }
  | {
      type: 'object'
      key: 'fats' | 'carbs'
      label: string
      children: {
        key: string
        label: string
      }[]
    }

export const MACRO_SCHEMA: MacroSchema[] = [
  {
    type: 'number',
    key: 'kcal',
    label: 'Energy (kcal)'
  },
  {
    type: 'object',
    key: 'fats',
    label: 'Fat',
    children: [
      { key: 'total', label: 'Total' },
      { key: 'saturated', label: 'Saturated' }
    ]
  },
  {
    type: 'object',
    key: 'carbs',
    label: 'Carbohydrates',
    children: [
      { key: 'total', label: 'Total' },
      { key: 'sugars', label: 'Sugars' }
    ]
  },
  {
    type: 'number',
    key: 'protein',
    label: 'Protein'
  },
  {
    type: 'number',
    key: 'salt',
    label: 'Salt'
  },
  {
    type: 'number',
    key: 'fiber',
    label: 'Fiber'
  }
]
