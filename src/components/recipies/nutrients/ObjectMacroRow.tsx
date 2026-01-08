import { TableCell, TableRow } from '@mui/material'

type ObjectRowProps = {
  label: string
  total: Record<string, number>
  perServing: Record<string, number>
}

const ObjectMacroRow = ({ label, total, perServing }: ObjectRowProps) => (
  <>
    {Object.keys(total).map((key) => (
      <TableRow key={`${label}-${key}`}>
        <TableCell>
          {label} {key}
        </TableCell>
        <TableCell align='right'>{total[key].toFixed(2)}</TableCell>
        <TableCell align='right'>{perServing[key].toFixed(2)}</TableCell>
      </TableRow>
    ))}
  </>
)

export default ObjectMacroRow
