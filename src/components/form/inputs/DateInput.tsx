import { TextField } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui'
import { useController, useFormContext } from 'react-hook-form'
import { CommonHelperText } from './HelperText'
import { Label } from './Label'

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    minHeight: 40,
    borderRadius: 8
  },
  textField: {
    padding: theme.spacing(1.5),
    textAlign: 'start'
  }
}))

interface DateInputProps {
  name: string
  label: string
  defaultValue?: Date // ISO date string: 'YYYY-MM-DD'
  disabled?: boolean
  required?: boolean | string
  onChange?: (value: string) => void
  fullWidth?: boolean
  classes?: any
  sx?: SxProps<Theme>
}

const DateInput = ({
  name,
  label,
  defaultValue,
  disabled = false,
  required = false,
  onChange,
  fullWidth = true
}: DateInputProps) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value // ISO date string 'YYYY-MM-DD'
    field.onChange(value)
    onChange?.(value)
  }

  return (
    <>
      <Label label={label} required={!!required} error={error} />
      <TextField
        {...field}
        type='date'
        fullWidth={fullWidth}
        disabled={disabled}
        onChange={handleChange}
        className={cx(classes.root, classes?.root)}
      />
      <CommonHelperText invalid={invalid} error={error} />
    </>
  )
}

export default DateInput
