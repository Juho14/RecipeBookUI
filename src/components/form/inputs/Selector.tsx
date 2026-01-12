import { Select, MenuItem } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material'
import type { SelectOption } from '../../../types/form/SelectOption'
import type { SxProps, Theme } from '@mui/material/styles'
import type { SelectorClasses } from '../../../types/inputStyles/SelectorClasses'
import { makeStyles } from 'tss-react/mui'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { CommonHelperText } from './HelperText'
import { Label } from './Label'

const useStyles = makeStyles()((theme: Theme) => ({
  root: { minHeight: 40, borderRadius: 8 },
  select: { padding: theme.spacing(1.5), textAlign: 'start' },
  menuItem: { fontSize: 14 }
}))

interface SelectorProps<T extends string | number> {
  name: string
  label: string
  defaultValue?: T
  disabled?: boolean
  required?: boolean | string // true = default, string = custom message
  options: SelectOption<T>[]
  fullWidth?: boolean
  classes?: SelectorClasses
  sx?: SxProps<Theme>
  onChange?: (value: T) => void
}

const Selector = <T extends string | number>({
  name,
  label,
  defaultValue,
  disabled = false,
  required = false,
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
  } = useController({
    name,
    control,
    defaultValue,
    rules: {
      required
    }
  })

  const handleChange = (e: SelectChangeEvent<unknown>) => {
    const value = e.target.value as T
    field.onChange(value)
    if (onChange) onChange(value)
  }

  const selectedLabel =
    options.find((opt) => opt.value === field.value)?.label ?? ''

  return (
    <>
      <Label label={label} required={!!required} error={error} />
      <Select<unknown>
        {...field}
        fullWidth={fullWidth}
        value={field.value ?? ''}
        disabled={disabled}
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
