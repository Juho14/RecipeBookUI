export type Page =
  | {
      label: string
      path: string
      isRecipe?: false
    }
  | {
      label: string
      children: {
        label: string
        path: string
      }[]
      isRecipe: true
    }

export type LeafPage = Extract<Page, { path: string }>
export type ParentPage = Extract<Page, { children: any[] }>

export const PAGES: Page[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Pasta',
    isRecipe: true,
    children: [
      { label: 'Chorizo Pasta', path: '/recipes/pasta/chorizo' },
      { label: 'Pesto Pasta', path: '/recipes/pasta/chicken-pesto' },
    ],
  },
  {
    label: 'Asian',
    isRecipe: true,
    children: [
      { label: 'Hoisin Chicken', path: '/recipes/asian/hoisin-chicken' },
    ],
  },
  {
    label: 'Fish',
    isRecipe: true,
    children: [{ label: 'Oven Salmon', path: '/recipes/fish/salmon' }],
  },
  { label: 'About', path: '/about' },
]
