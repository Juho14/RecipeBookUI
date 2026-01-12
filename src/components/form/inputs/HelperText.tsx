import { makeStyles } from 'tss-react/mui'
import { HelperText } from './FormHelperText'
import type { FieldError } from 'react-hook-form'

const useStyles = makeStyles()(() => ({
  helperText: {
    color: '#d32f2f'
  }
}))

interface CommonHelperTextProps {
  invalid: boolean
  error: FieldError | undefined
}
export function CommonHelperText({ invalid, error }: CommonHelperTextProps) {
  const { classes } = useStyles()
  return (
    <HelperText
      className={classes.helperText}
      invalid={invalid}
      error={typeof error === 'string' ? error : error?.message}
    />
  )
}
