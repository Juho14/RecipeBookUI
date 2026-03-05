import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Fragment } from 'react/jsx-runtime'
import type { AnyRecipe } from '../../types/Recipe/Recipe'

const Ingredients = ({ recipe }: { recipe: AnyRecipe }) => {
  if (!recipe) return null

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h6'>Ingredients</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <List>
          {recipe.ingredients.map((item, index) => (
            <Fragment key={index}>
              <ListItem disablePadding>
                <ListItemText
                  primary={item.name}
                  secondary={`${item.amount ?? item.grams} ${item.cookingUnit}`}
                />
              </ListItem>
            </Fragment>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  )
}

export default Ingredients
