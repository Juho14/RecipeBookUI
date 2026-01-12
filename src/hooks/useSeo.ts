import { useLocation, matchPath } from 'react-router-dom'
import { seoMap, type SEOConfig } from '../types/metadata/seoMap'

export function useSEO(dynamicMeta?: Partial<SEOConfig>) {
  const location = useLocation()
  let routeMeta: SEOConfig | undefined

  // Check static routes first
  routeMeta = seoMap[location.pathname]

  // Handle dynamic routes (e.g., recipes/:category/:recipe)
  if (!routeMeta) {
    const match = matchPath('/recipes/:category?/:recipe?', location.pathname)
    if (match?.params.recipe) {
      routeMeta = {
        title: `${match.params.recipe} – My App`,
        description: `Recipe for ${match.params.recipe}`,
        canonical: `https://myapp.com${location.pathname}`,
      }
    } else if (match?.params.category) {
      routeMeta = {
        title: `${match.params.category} Recipes – My App`,
        description: `Recipes in ${match.params.category} category`,
        canonical: `https://myapp.com${location.pathname}`,
      }
    }
  }

  const finalMeta = { ...routeMeta, ...dynamicMeta }
  return finalMeta
}
