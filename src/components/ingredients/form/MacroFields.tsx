import { Grid } from '@mui/material'
import type { Macros } from '../../../types/ingredients/Macros'
import TextInput from '../../form/inputs/TextInput'
import { useTranslation } from 'react-i18next'

type FlattenKeys<T, Prefix extends string = ''> = {
  [K in keyof T & (string | number)]: T[K] extends object
    ? FlattenKeys<T[K], `${Prefix}${K}.`>
    : `${Prefix}${K}`
}[keyof T & (string | number)]

type MacroFieldsProps = {
  prefix?: string
}

const macroKeys: FlattenKeys<Macros>[] = [
  'fats.total',
  'fats.saturated',
  'carbs.total',
  'carbs.sugars',
  'protein',
  'salt',
  'fiber'
]

const MacroFields = ({ prefix = 'macros.' }: MacroFieldsProps) => {
  const { t } = useTranslation()
  return (
    <>
      {macroKeys.map((key) => (
        <Grid size={{ xs: 6 }} key={key}>
          <TextInput
            name={`${prefix}${key}`}
            label={t(`ingredients.${key}`)}
            required
          />
        </Grid>
      ))}
    </>
  )
}
export default MacroFields
