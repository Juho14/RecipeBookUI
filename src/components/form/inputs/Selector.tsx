import { Select, MenuItem } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material'
import type { SelectOption } from '../../../types/form/SelectOption'
import type { SxProps, Theme } from '@mui/material/styles'
import type { SelectorClasses } from '../../../types/inputStyles/SelectorClasses'
import { makeStyles } from 'tss-react/mui'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { CommonHelperText } from './HelperText'

const useStyles = makeStyles()((theme: Theme) => ({
  root: { minHeight: 40, borderRadius: 8 },
  select: { padding: theme.spacing(1.5), textAlign: 'start' },
  menuItem: { fontSize: 14 }
}))

interface SelectorProps<T extends string | number> {
  name: string
  label: string
  defaultValue?: T
  options: SelectOption<T>[]
  fullWidth?: boolean
  classes?: SelectorClasses
  sx?: SxProps<Theme>
  onChange?: (value: T) => void
}

const Selector = <T extends string | number>({
  name,
  defaultValue,
  options,
  fullWidth = true,
  onChange
}: SelectorProps<T>) => {
  const { classes, cx } = useStyles()
  const { t } = useTranslation()
  const { control } = useFormContext()

  const {
    field,
    fieldState: { invalid, error }
  } = useController({ name, control, defaultValue })

  const handleChange = (e: SelectChangeEvent<unknown>) => {
    const value = e.target.value as T
    field.onChange(value)
    if (onChange) onChange(value)
  }

  const selectedLabel =
    options.find((opt) => opt.value === field.value)?.label ?? ''

  return (
    <>
      <Select<unknown>
        {...field}
        fullWidth={fullWidth}
        value={field.value ?? ''}
        onChange={handleChange}
        renderValue={() => selectedLabel}
        className={cx(classes.root, classes?.root)}
        classes={{ select: cx(classes.select, classes?.select) }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {t(option.label)}
          </MenuItem>
        ))}
      </Select>

      <CommonHelperText invalid={invalid} error={error} />
    </>
  )
}

export default Selector
