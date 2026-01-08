import { List } from '@mui/material'
import type { Page } from '../../types/navigation/PageConfig'
import DrawerItem from './DrawerItem'

interface RecipeListProps {
  recipes: (Page & { parentLabel?: string })[]
  onNavigate: (path: string) => void
}

const RecipeList = ({ recipes, onNavigate }: RecipeListProps) => {
  return (
    <List sx={{ width: 280 }}>
      {recipes.map((recipe) => (
        <DrawerItem
          page={recipe}
          onNavigate={onNavigate}
        />
      ))}
    </List>
  )
}

export default RecipeList
