export type Page =
  | {
      label: string
      path: string
      isParent?: false
    }
  | {
      label: string
      children: {
        label: string
        path: string
      }[]
      isParent: true
    }

export type LeafPage = Extract<Page, { path: string }>
export type ParentPage = Extract<Page, { children: any[] }>

export const PAGES: Page[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Pasta',
    isParent: true,
    children: [
      { label: 'Chorizo Pasta', path: '/recipes/pasta/chorizo' },
      { label: 'Pesto Pasta', path: '/recipes/pasta/chicken-pesto' }
    ]
  },
  {
    label: 'Asian',
    isParent: true,
    children: [
      { label: 'Hoisin Chicken', path: '/recipes/asian/hoisin-chicken' }
    ]
  },
  {
    label: 'Fish',
    isParent: true,
    children: [{ label: 'Oven Salmon', path: '/recipes/fish/salmon' }]
  },
  {
    label: 'Add data',
    isParent: true,
    children: [
      { label: 'Add recipe', path: '/add-recipe' },
      { label: 'Add ingredient', path: '/add-ingredient' }
    ]
  },

  { label: 'About', path: '/about' }
]
