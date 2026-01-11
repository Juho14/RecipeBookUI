import type { FieldErrors, Resolver } from 'react-hook-form'
import type { Ingredient } from '../../types/ingredients/Ingredient'
import { validateMacros } from '../../utils/ingredientUtils/ValidateMacros'
import { setError } from '../form/SetError'

export const ingredientFormValidator: Resolver<Ingredient> = async (values) => {
  const errors: FieldErrors<Ingredient> = {}

  if (!validateMacros(values.macros)) {
    setError(errors, 'macros.kcal', 'Calories do not match macros')
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors
  }
}
