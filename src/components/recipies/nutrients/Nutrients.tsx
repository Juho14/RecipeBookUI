import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store'
import { calculateMacros } from '../../../utils/nutrients/MacroCalculator'
import { MACRO_SCHEMA } from '../../../types/ingredients/MacroSchema'
import NumericMacroRow from './NumericMacroRow'
import ObjectMacroRow from './ObjectMacroRow'

const Nutrients = () => {
  const recipe = useSelector((state: RootState) => state.recipe.activeRecipe)
  if (!recipe) return <p>No recipe selected</p>

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
          {MACRO_SCHEMA.map((macro) => {
            if (macro.type === 'number') {
              return (
                <NumericMacroRow
                  key={macro.key}
                  label={macro.label}
                  total={total[macro.key]}
                  perServing={perServing[macro.key]}
                />
              )
            }

            return (
              <ObjectMacroRow
                key={macro.key}
                label={macro.label}
                total={total[macro.key]}
                perServing={perServing[macro.key]}
              />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Nutrients
