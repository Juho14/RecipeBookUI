import type { FieldErrors, Resolver } from 'react-hook-form'
import { validateMacros } from '../../../utils/ingredientUtils/ValidateMacros'
import { setError } from '../../form/SetError'
import i18n from '../../../locales/translator'
import type { IngredientFormValues } from './IngredientsForm'

export const ingredientFormValidator: Resolver<IngredientFormValues> = async (
  values
) => {
  const errors: FieldErrors<IngredientFormValues> = {}

  if (!validateMacros(values.macros)) {
    setError(errors, 'macros.kcal', i18n.t('ingredients.kcalMismatch'))
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors
  }
}
