import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import type { Page } from '../../types/navigation/PageConfig'
import ChildNavItem from './ChildNavItem'

interface Props {
  page: Page
  onNavigate: (path: string) => void
}

const ParentNavItem = ({ page, onNavigate }: Props) => {
  if (!('children' in page)) return null

  return (
    <Accordion disableGutters elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {page.label}
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0 }}>
        <List disablePadding>
          {page.children.map((child) => (
            <ChildNavItem
              key={child.path}
              child={child}
              onNavigate={onNavigate}
            />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  )
}

export default ParentNavItem
