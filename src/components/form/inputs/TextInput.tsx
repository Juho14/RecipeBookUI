import { TextField } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import type { SelectorClasses } from '../../../types/inputStyles/SelectorClasses'
import { makeStyles } from 'tss-react/mui'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { CommonHelperText } from './HelperText'

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
  onChange,
  fullWidth = true,
  multiline = false
}: TextInputProps<T>) => {
  const { classes, cx } = useStyles()
  const { t } = useTranslation()
  const { control } = useFormContext()

  const {
    field,
    fieldState: { invalid, error }
  } = useController({
    name,
    control,
    defaultValue
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e)
    onChange?.(e.target.value as T)
  }

  return (
    <>
      <TextField
        {...field}
        label={t(label)}
        fullWidth={fullWidth}
        onChange={handleChange}
        className={cx(classes.root, classes?.root)}
        multiline={multiline}
        error={invalid}
      />
      <CommonHelperText invalid={invalid} error={error} />
    </>
  )
}

export default TextInput
