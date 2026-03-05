import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { MACRO_SCHEMA } from '../../../types/ingredients/MacroSchema'
import NumericMacroRow from './NumericMacroRow'
import ObjectMacroRow from './ObjectMacroRow'
import type { AnyRecipe } from '../../../types/Recipe/Recipe'
import { useMacros } from '../../../hooks/macros/useMacros'

const Nutrients = ({ recipe }: { recipe: AnyRecipe }) => {
  const macros = useMacros(recipe)
  if (!recipe || !macros) return <p>No recipe selected</p>

  const { totalMacros, perServingMacros } = macros

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
                  total={totalMacros[macro.key]}
                  perServing={perServingMacros[macro.key]}
                />
              )
            }

            return (
              <ObjectMacroRow
                key={macro.key}
                label={macro.label}
                total={totalMacros[macro.key]}
                perServing={perServingMacros[macro.key]}
              />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Nutrients
