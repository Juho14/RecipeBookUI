import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

const Ingredients = () => {
  const recipe = useSelector((state: RootState) => state.recipe.activeRecipe)
  if (!recipe) return null

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Ingredients</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <List>
          {recipe.ingredients.map(
            ({ ingredient, amount, alt_amount, unit }) => (
              <ListItem key={ingredient.name} disablePadding>
                <ListItemText
                  primary={ingredient.name}
                  secondary={`${alt_amount ?? amount} ${unit}`}
                />
              </ListItem>
            )
          )}
        </List>
      </AccordionDetails>
    </Accordion>
  )
}

export default Ingredients
