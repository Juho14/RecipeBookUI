import type { FieldErrors, Resolver } from 'react-hook-form'
import type { Ingredient } from '../../types/ingredients/Ingredient'
import { validateMacros } from '../../utils/ingredientUtils/ValidateMacros'
import { setError } from '../form/SetError'
import i18n from '../../locales/translator'

export const ingredientFormValidator: Resolver<Ingredient> = async (values) => {
  const errors: FieldErrors<Ingredient> = {}

  if (!validateMacros(values.macros)) {
    setError(errors, 'macros.kcal', i18n.t('ingredients.kcalMismatch'))
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors
  }
}
