// components/ui/AppSelect.tsx
import { Select, MenuItem } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material'
import type { SelectOption } from '../../types/form/SelectOption'
import type { SxProps, Theme } from '@mui/material/styles'
import type { SelectorClasses } from '../../types/inputStyles/SelectorClasses'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    minHeight: 40,
    borderRadius: 8,
  },
  select: {
    padding: theme.spacing(1.5),
    textAlign: 'start'
  },
  menuItem: {
    fontSize: 14,
  },
}))

interface AppSelectProps<T extends string | number> {
  value: T
  options: SelectOption<T>[]
  onChange: (value: T) => void
  fullWidth?: boolean
  classes?: SelectorClasses
  sx?: SxProps<Theme>
}

const Selector = <T extends string | number>({
  value,
  options,
  onChange,
  fullWidth = true,
}: AppSelectProps<T>) => {
  const { classes, cx } = useStyles()
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    onChange(e.target.value as T)
  }

  const selectedLabel = options.find((opt) => opt.value === value)?.label ?? ''

  return (
    <Select<unknown>
      fullWidth={fullWidth}
      value={value}
      onChange={handleChange}
      renderValue={() => selectedLabel}
      className={cx(classes.root, classes?.root)}
      classes={{
        select: cx(classes.select, classes?.select),
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default Selector
