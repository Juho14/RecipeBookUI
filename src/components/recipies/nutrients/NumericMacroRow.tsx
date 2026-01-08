import { TableCell, TableRow } from "@mui/material"

type NumericRowProps = {
  label: string
  total: number
  perServing: number
}

const NumericMacroRow = ({ label, total, perServing }: NumericRowProps) => (
  <TableRow>
    <TableCell>{label}</TableCell>
    <TableCell align="right">{total.toFixed(2)}</TableCell>
    <TableCell align="right">{perServing.toFixed(2)}</TableCell>
  </TableRow>
)
export default NumericMacroRow