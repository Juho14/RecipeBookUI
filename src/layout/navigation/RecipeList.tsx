import { List } from '@mui/material'
import type { PageWithParentLabel } from '../../types/navigation/PageConfig'
import DrawerItem from './DrawerItem'

interface RecipeListProps {
  recipes: PageWithParentLabel
  onNavigate: (path: string) => void
}

const RecipeList = ({ recipes, onNavigate }: RecipeListProps) => {
  return (
    <List sx={{ width: 280 }}>
      {recipes.map((recipe) => (
        <DrawerItem
          page={recipe.isParent ? recipe : recipe}
          onNavigate={onNavigate}
        />
      ))}
    </List>
  )
}

export default RecipeList
