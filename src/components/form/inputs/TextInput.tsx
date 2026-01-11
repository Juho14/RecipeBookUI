import { TextField } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import type { SelectorClasses } from '../../../types/inputStyles/SelectorClasses'
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
  },
  menuItem: {
    fontSize: 14
  }
}))

interface TextInputProps<T extends string | number> {
  name: string
  label: string
  defaultValue?: T
  disabled?: boolean
  required?: boolean | string // true = default, string = custom message
  onChange?: (value: T) => void
  fullWidth?: boolean
  classes?: SelectorClasses
  sx?: SxProps<Theme>
  multiline?: boolean
}

const TextInput = <T extends string | number>({
  name,
  label,
  defaultValue,
  disabled = false,
  required = false,
  onChange,
  fullWidth = true,
  multiline = false
}: TextInputProps<T>) => {
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
    field.onChange(e)
    onChange?.(e.target.value as T)
  }

  return (
    <>
      <Label label={label} required={!!required} error={error} />
      <TextField
        {...field}
        fullWidth={fullWidth}
        disabled={disabled}
        onChange={handleChange}
        className={cx(classes.root, classes?.root)}
        multiline={multiline}
      />
      <CommonHelperText invalid={invalid} error={error} />
    </>
  )
}

export default TextInput
