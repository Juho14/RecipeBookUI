import { makeStyles } from 'tss-react/mui'
import { HelperText } from './FormHelperText'
import type { FieldError } from 'react-hook-form'

const useStyles = makeStyles()(() => ({
  defaultLabel: {
    fontWeight: '500',
    fontSize: '15px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: '#333333'
  },
  labelContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  errorLabel: {
    // color: '#d32f2f'
  },
  disabledLabel: {
    color: 'rgba(0, 0, 0, 0.26)'
  },
  tooltip: {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid #e0e0e0',
    fontSize: '1.3rem',
    padding: '1rem 1.25rem',
    borderRadius: '1rem',
    maxWidth: '35rem',
    boxShadow: '0 0.125rem 0.5rem rgba(0,0,0,0.1)',

    '& .MuiTooltip-arrow': {
      color: 'white',

      '&::before': {
        border: '1px solid #e0e0e0',
        backgroundColor: 'white',
        boxShadow: '0.0625rem 0.0625rem 0.25rem rgba(0,0,0,0.1)'
      }
    }
  },
  infoIcon: {
    // color: '#FF3297',
    fontSize: 20
  },
  helperText: {
    // color: '#d32f2f'
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
