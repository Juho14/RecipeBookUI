import { Tooltip } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import InfoOutlined from '@mui/icons-material/InfoOutlined' // make sure you import the icon
import type { ReactNode } from 'react'
import type { FieldError } from 'react-hook-form'

const useStyles = makeStyles()(() => ({
  defaultLabel: {
    fontWeight: 600,
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
    color: '#d32f2f'
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
    color: '#FF3297',
    fontSize: 20
  },
  helperText: {
    color: '#d32f2f'
  }
}))

interface LabelProps {
  label: string | ReactNode
  required?: boolean
  disabled?: boolean
  error?: FieldError
  tooltipTitle?: string | ReactNode
  customClasses?: {
    label?: string
  }
  customStyles?: {
    label?: React.CSSProperties
  }
}

export const Label = ({
  label,
  required = false,
  disabled = false,
  error,
  tooltipTitle = '',
  customClasses = {},
  customStyles = {}
}: LabelProps) => {
  const { classes, cx } = useStyles()

  if (!label) return null

  return (
    <label
      className={cx(
        classes.defaultLabel,
        customClasses.label,
        disabled ? classes.disabledLabel : '',
        error ? classes.errorLabel : ''
      )}
      style={customStyles.label}
    >
      <div className={classes.labelContent}>
        <span>
          {label} {required ? '*' : ''}
        </span>
        {tooltipTitle && (
          <Tooltip title={tooltipTitle} placement='top' arrow>
            <InfoOutlined className={classes.infoIcon} />
          </Tooltip>
        )}
      </div>
    </label>
  )
}
