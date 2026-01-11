import type { FieldErrors, FieldValues, Path } from 'react-hook-form'

export function setError<T extends FieldValues>(
  errors: FieldErrors<T>,
  path: Path<T>,
  message: string,
  type = 'validate'
) {
  const keys = path.split('.') as (keyof any)[]
  let current: any = errors

  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] ??= {}
    current = current[keys[i]]
  }

  current[keys[keys.length - 1]] = { type, message }
}
