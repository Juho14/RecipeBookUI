import { ListItemButton, ListItemText } from '@mui/material'
import type { LeafPage } from '../../types/navigation/PageConfig'

interface Props {
  child: LeafPage
  onNavigate: (path: string) => void
}

const ChildNavItem = ({ child, onNavigate }: Props) => {
  return (
    <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate(child.path)}>
      <ListItemText primary={child.label} />
    </ListItemButton>
  )
}

export default ChildNavItem
