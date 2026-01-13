import { useFieldArray, useFormContext } from 'react-hook-form'
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import TextInput from '../../form/inputs/TextInput'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

const ProcessFields = () => {
  const { control } = useFormContext()
  const {
    fields: processFields,
    append: appendProcess,
    remove: removeProcess
  } = useFieldArray({
    control,
    name: 'process'
  })
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h6'>Cooking process</Typography>
      </Grid>
      {processFields.map((field, index) => (
        <Box
          key={field.id}
          sx={{ border: '1px solid black', p: 2, mb: 2 }}
          display='flex'
          flexDirection='column'
          gap={2}
        >
          <Box display='flex'>
            <Grid size={{ xs: 12 }}>
              <TextInput
                name={`process.${index}.en`}
                label={`Step ${index + 1}`}
                required
              />
            </Grid>
            <Grid size={{ xs: 2 }}>
              <IconButton onClick={() => removeProcess(index)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Box>
          <Grid size={{ xs: 12 }}>
            <TextInput
              name={`process.${index}.fi`}
              label={`Vaihe ${index + 1}`}
            />
          </Grid>
        </Box>
      ))}
      <Grid size={{ xs: 12 }}>
        <Button
          startIcon={<AddIcon />}
          onClick={() => appendProcess({ en: '' })}
        >
          Add Step
        </Button>
      </Grid>
    </>
  )
}
export default ProcessFields
