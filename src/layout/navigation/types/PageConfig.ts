export type Page = {
  id: string
  label: string
  path?: string
  children?: Page[]
}

export const mergePages = (recipePages: Page[]): Page[] => {
  return [
    { id: 'home', label: 'Home', path: '/' },
    {
      id: 'recipes',
      label: 'Recipes',
      children: recipePages
    },
    { id: 'shopping-list', label: 'Shopping list', path: '/shopping-list' },
    {
      id: 'add-data',
      label: 'Add data',
      children: [
        { id: 'add-recipe', label: 'Add recipe', path: '/add-recipe' },
        {
          id: 'add-ingredient',
          label: 'Add ingredient',
          path: '/add-ingredient'
        }
      ]
    },
    { id: 'about', label: 'About', path: '/about' }
  ]
}
