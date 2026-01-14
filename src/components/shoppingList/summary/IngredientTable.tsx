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
import { getIngredientName } from '../../../utils/ingredientUtils/getIngredientName'
import { Fragment } from 'react/jsx-runtime'

type IngredientTableProps = {
  ingredientsById: ReturnType<typeof groupByIngredientId>
}

const IngredientTable = ({ ingredientsById }: IngredientTableProps) => (
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
          const totalAmount = items.reduce((sum, item) => sum + item.amount, 0)
          const unit = items[0]?.unit

          return (
            <Fragment key={ingredientId}>
              {items.map((item, index) => (
                <TableRow key={`${ingredientId}-${index}`}>
                  {index === 0 && (
                    <TableCell rowSpan={items.length + 1}>
                      <Typography fontWeight={500}>
                        {getIngredientName(item.ingredientId)}
                      </Typography>
                    </TableCell>
                  )}

                  <TableCell>
                    {item.amount} {item.unit}
                  </TableCell>

                  <TableCell>
                    {item.source.type === 'manual'
                      ? 'Manual'
                      : item.source.recipeName}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>
                  Total: {totalAmount} {unit}
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
export default IngredientTable
