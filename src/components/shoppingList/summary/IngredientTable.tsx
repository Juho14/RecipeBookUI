import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import type { groupByIngredientId } from '../../../utils/shoppingListUtils/groupByIngredientId'
import { Fragment } from 'react/jsx-runtime'
import {
  convertCookingUnit,
  getTotalAmountWithUnit
} from '../../../utils/ingredientUtils/cookingUnitConversions'
import { useIngredientNameMap } from '../../../hooks/ingredients/useIngredientNameMap'
import { groupItemsBySource } from '../../../utils/shoppingListUtils/groupItemsBySource'

type IngredientTableProps = {
  ingredientsById: ReturnType<typeof groupByIngredientId>
}

const IngredientTable = ({ ingredientsById }: IngredientTableProps) => {
  const { getIngredientName } = useIngredientNameMap()

  return (
    <TableContainer component={Paper} elevation={1}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Ingredient</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Source</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Object.entries(ingredientsById).map(([ingredientId, items]) => {
            const itemsBySource = groupItemsBySource(items)
            const { amount: totalAmount, unit: totalUnit } =
              getTotalAmountWithUnit(items)

            return (
              <Fragment key={ingredientId}>
                {Object.entries(itemsBySource).map(
                  ([sourceKey, sourceItems], index) => {
                    const { amount, unit } = getTotalAmountWithUnit(sourceItems)
                    const convertedUnit = convertCookingUnit(unit)

                    return (
                      <TableRow key={`${ingredientId}-${sourceKey}`}>
                        {/* Ingredient name only once */}
                        {index === 0 && (
                          <TableCell
                            rowSpan={Object.keys(itemsBySource).length + 1}
                          >
                            <Typography fontWeight={500}>
                              {getIngredientName(Number(ingredientId))}
                            </Typography>
                          </TableCell>
                        )}

                        <TableCell>
                          {amount} {convertedUnit}
                        </TableCell>

                        <TableCell>
                          {sourceKey === 'manual' ? 'Manual' : sourceKey}
                        </TableCell>
                      </TableRow>
                    )
                  }
                )}

                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>
                    Total: {totalAmount} {convertCookingUnit(totalUnit)}
                  </TableCell>
                  <TableCell />
                </TableRow>
              </Fragment>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default IngredientTable
