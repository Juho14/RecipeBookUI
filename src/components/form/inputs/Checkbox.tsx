import { Checkbox } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import type { SelectorClasses } from '../../../types/inputStyles/SelectorClasses'
import { makeStyles } from 'tss-react/mui'
import { useController, useFormContext } from 'react-hook-form'
import { CommonHelperText } from './HelperText'
import { Label } from './Label'
import type { ChangeEvent } from 'react'

const useStyles = makeStyles()((theme: Theme) => ({
  root: { minHeight: 40, borderRadius: 8 },
  checkBox: { padding: theme.spacing(1.5), textAlign: 'start' },
  menuItem: { fontSize: 14 }
}))

interface CheckboxProps<T extends boolean | string | number> {
  name: string
  label: string
  defaultValue?: T
  disabled?: boolean
  required?: boolean | string // true = default, string = custom message
  classes?: SelectorClasses
  onChange?: (value: T) => void
  trueValue?: unknown
  falseValue?: unknown
}

const CheckboxInput = <T extends boolean | string | number>({
  name,
  label,
  defaultValue,
  disabled = false,
  required = false,
  onChange,
  trueValue = true,
  falseValue = false
}: CheckboxProps<T>) => {
  const { classes, cx } = useStyles()
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked
    const activeValue = value ? trueValue : falseValue
    field.onChange(activeValue)
    if (onChange) onChange(activeValue as T)
  }

  return (
    <>
      <Label label={label} required={!!required} error={error} />
      <Checkbox
        {...field}
        value={field.value ?? falseValue}
        disabled={disabled}
        onChange={handleChange}
        className={cx(classes.root, classes?.root)}
        classes={{ root: cx(classes.checkBox, classes?.checkBox) }}
      />

      <CommonHelperText invalid={invalid} error={error} />
    </>
  )
}

export default CheckboxInput
