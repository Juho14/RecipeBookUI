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
import type { ManualItems } from '../../../types/shoppingList/ShoppingListForm'

type ManualItemsTableProps = {
  items: ManualItems[]
}

const ManualItemsTable = ({ items }: ManualItemsTableProps) => {
  if (!items.length) return null

  return (
    <TableContainer component={Paper} elevation={1}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Source</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography fontWeight={500}>{item.name}</Typography>
              </TableCell>
              <TableCell>
                {item.amount} {item.unit}
              </TableCell>
              <TableCell>Manual</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ManualItemsTable
