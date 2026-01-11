import type { Resolver, FieldValues, FieldErrors, Path } from 'react-hook-form'
import { setError } from './SetError'
import i18next from 'i18next'
/**
 * Wraps a custom resolver and merges it with per-field validations like `required`
 */
export const resolverWrapper = <TFieldValues extends FieldValues>(
  customResolver: Resolver<TFieldValues>
): Resolver<TFieldValues> => {
  return async (values, context, options) => {
    const fieldErrors: FieldErrors<TFieldValues> = {}

    if (options?.fields) {
      for (const key in options.fields) {
        const field = options.fields[key]
        const value = values[key as keyof TFieldValues]

        if (
          field?.required &&
          (value === undefined || value === '' || value === null)
        ) {
          setError(
            fieldErrors,
            key as Path<TFieldValues>,
            typeof field.required === 'string'
              ? `${field.required}`
              : i18next.t('form.required')
          )
        }
      }
    }

    const customResult = await customResolver(values, context, options)

    const mergedErrors: FieldErrors<TFieldValues> = {
      ...customResult.errors,
      ...fieldErrors
    }

    return {
      values: Object.keys(mergedErrors).length ? {} : values,
      errors: mergedErrors
    }
  }
}
