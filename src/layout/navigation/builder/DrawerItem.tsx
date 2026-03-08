import {
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import type { Page } from '../types/PageConfig'

interface Props {
  page: Page
  onNavigate: (path: string) => void
  level?: number
}

const DrawerItem = ({ page, onNavigate, level = 0 }: Props) => {
  const key = page.id

  // Leaf page
  if ('path' in page) {
    return (
      <ListItemButton
        key={key}
        sx={{ pl: 2 + level * 2 }}
        onClick={() => onNavigate(page.path ?? '')}
      >
        <ListItemText
          primary={page.label}
          slotProps={{
            primary: {
              fontSize: `${1 - level * 0.125}rem`,
              fontWeight: level === 0 ? 600 : 400
            }
          }}
        />
      </ListItemButton>
    )
  }

  // Parent page
  return (
    <Accordion key={key} disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ListItemText
          primary={page.label}
          slotProps={{
            primary: {
              fontSize: `${1 - level * 0.125}rem`,
              fontWeight: 600
            }
          }}
        />
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0 }}>
        <List disablePadding>
          {page?.children?.map((child: Page) => (
            <DrawerItem
              key={child.id}
              page={child}
              level={level + 1}
              onNavigate={onNavigate}
            />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  )
}

export default DrawerItem
