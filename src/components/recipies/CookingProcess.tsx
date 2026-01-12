import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import type { RootState } from '../../store'
import type { RecipeProcessStep } from '../../types/Recipe/Recipe'
import { LANG } from '../../types/ui/Lang'

const CookingProcess = () => {
  const recipe = useSelector((state: RootState) => state.recipe.activeRecipe)
  const lang = useSelector((state: RootState) => state.lang.current)
  const [toggledSteps, setToggledSteps] = useState<Set<number>>(new Set())

  if (!recipe) {
    return <p>No recipe selected</p>
  }

  const completedSteps = recipe
    ? recipe.process.map((_, i) => toggledSteps.has(i))
    : []

  const toggleStep = (index: number) => {
    setToggledSteps((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) newSet.delete(index)
      else newSet.add(index)
      return newSet
    })
  }
  const getTranslatedStep = (step: RecipeProcessStep) => {
    return lang === LANG.FI ? step.fi || step.en : step.en
  }

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h6'>Cooking process</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <List>
          {recipe.process.map((step, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                opacity: completedSteps[index] ? 0.6 : 1
              }}
            >
              <Checkbox
                checked={completedSteps[index]}
                onChange={() => toggleStep(index)}
              />
              <ListItemText
                primary={getTranslatedStep(step)}
                sx={{
                  textDecoration: completedSteps[index]
                    ? 'line-through'
                    : 'none'
                }}
              />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  )
}

export default CookingProcess
