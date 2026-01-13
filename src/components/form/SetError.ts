import type { FieldErrors, FieldValues, Path } from 'react-hook-form'

export function setError<T extends FieldValues>(
  errors: FieldErrors<T>,
  path: Path<T>,
  message: string,
  type = 'validate'
) {
  const keys = path.split('.') as (keyof T)[]
  let current: FieldErrors<T> = errors

  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] ??= {} as FieldErrors<T>[keyof T]
    current = current[keys[i]] as FieldErrors<T>
  }

  current[keys[keys.length - 1]] = { type, message } as FieldErrors<T>[keyof T]
}
