import FormHelperText from '@mui/material/FormHelperText'
interface HelperTextProps {
  invalid: boolean
  error: string | undefined | false
  style?: React.CSSProperties
  className?: string
}
export const HelperText = ({
  invalid,
  error,
  style,
  className
}: HelperTextProps) => {
  if (!(invalid && error)) {
    return null
  } else {
    return (
      <FormHelperText className={className} style={style}>
        {invalid && error}
      </FormHelperText>
    )
  }
}
