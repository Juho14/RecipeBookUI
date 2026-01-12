import type { UseFormReturn } from 'react-hook-form'
import {
  isAutoLiquidType,
  needsLiquidOverride,
  type IngredientTypeId
} from '../../../types/ingredients/IngredientTypes'
import type { IngredientFormValues } from './IngredientsForm'
import { useEffect } from 'react'

export function useIngredientLiquidLogic(
  form: UseFormReturn<IngredientFormValues>,
  type: IngredientTypeId,
  useMl: boolean,
  isLiquidOverride: boolean
) {
  const { setValue } = form

  const autoLiquid = isAutoLiquidType(type)
  const showManualCheckbox = needsLiquidOverride(type)

  const isLiquid = autoLiquid || isLiquidOverride
  const requireDensity = isLiquid && !useMl

  useEffect(() => {
    if (!isLiquid) {
      setValue('useMl', false)
      setValue('density', 1)
    } else if (useMl) {
      setValue('density', 1)
    }
  }, [isLiquid, useMl, setValue])

  return { isLiquid, requireDensity, showManualCheckbox }
}
