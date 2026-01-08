import { TextField, Box } from '@mui/material'

interface DrawerSearchProps {
  value: string
  onChange: (value: string) => void
}

const DrawerSearch = ({ value, onChange }: DrawerSearchProps) => {
  return (
    <Box sx={{ p: 2 }}>
      <TextField
        fullWidth
        size="small"
        placeholder="Search recipes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  )
}

export default DrawerSearch
