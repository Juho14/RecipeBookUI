import { List } from '@mui/material'
import type { Page } from '../types/PageConfig'
import DrawerItem from './DrawerItem'

interface NavItemProps {
  pages: Page[]
  onNavigate: (path: string) => void
}

const NavItems = ({ pages, onNavigate }: NavItemProps) => {
  return (
    <List sx={{ width: 280 }}>
      {pages.map((page, index) => (
        <DrawerItem key={index} page={page} onNavigate={onNavigate} />
      ))}
    </List>
  )
}

export default NavItems
