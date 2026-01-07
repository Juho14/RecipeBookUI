import type { Recipe } from '../../types/Recipe/Recipe'
import { calculateMacros } from '../../utils/nutrients/MacroCalculator'
import {
  objectMacroKeys,
  numericMacroKeys,
} from '../../types/ingredients/Macros'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

const Nutrients = () => {
  const recipe = useSelector((state: RootState) => state.recipe.activeRecipe)
  if (!recipe) {
    return <p>No recipe selected</p>
  }

  const { total, perServing } = calculateMacros(recipe)
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Macro</TableCell>
            <TableCell align='right'>Total</TableCell>
            <TableCell align='right'>Per Serving</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {objectMacroKeys.map((key) => {
            const nestedKeys = Object.keys(total[key]) as Array<
              keyof (typeof total)[typeof key]
            >
            return nestedKeys.map((subKey) => (
              <TableRow key={`${key}-${subKey}`}>
                <TableCell>
                  {key.charAt(0).toUpperCase() + key.slice(1)} {subKey}
                </TableCell>
                <TableCell align='right'>{total[key][subKey]}</TableCell>
                <TableCell align='right'>{perServing[key][subKey]}</TableCell>
              </TableRow>
            ))
          })}

          {numericMacroKeys.map((key) => (
            <TableRow key={key}>
              <TableCell>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </TableCell>
              <TableCell align='right'>{total[key]}</TableCell>
              <TableCell align='right'>{perServing[key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Nutrients
