import {
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import type { Page } from '../../types/navigation/PageConfig'

interface Props {
  page: Page
  onNavigate: (path: string) => void
}

const DrawerItem = ({ page, onNavigate }: Props) => {
  if ('children' in page) {
    return (
      <Accordion disableGutters elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemText primary={page.label} />
        </AccordionSummary>

        <AccordionDetails sx={{ p: 0 }}>
          <List disablePadding>
            {page.children.map((child) => (
              <ListItemButton
                key={child.path}
                sx={{ pl: 4 }}
                onClick={() => onNavigate(child.path)}
              >
                <ListItemText primary={child.label} />
              </ListItemButton>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    )
  }

  return (
    <ListItemButton onClick={() => onNavigate(page.path)}>
      <ListItemText primary={page.label} />
    </ListItemButton>
  )
}

export default DrawerItem
