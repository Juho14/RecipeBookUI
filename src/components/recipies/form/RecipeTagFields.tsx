import { Button, Grid, IconButton } from '@mui/material'
import { useFieldArray, useFormContext } from 'react-hook-form'
import TextInput from '../../form/inputs/TextInput'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { useTranslation } from 'react-i18next'
import { Fragment } from 'react/jsx-runtime'

const RecipeTagFields = () => {
  const { t } = useTranslation()
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags'
  })

  return (
    <>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Grid size={{ xs: 11 }}>
            <TextInput name={`tags.${index}`} label={t('recipes.form.tag')} />
          </Grid>
          <Grid size={{ xs: 1 }}>
            <IconButton onClick={() => remove(index)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Fragment>
      ))}

      <Grid size={{ xs: 12 }}>
        <Button startIcon={<AddIcon />} onClick={() => append('')}>
          New tag
        </Button>
      </Grid>
    </>
  )
}

export default RecipeTagFields
