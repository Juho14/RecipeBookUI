import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, Button, Grid, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

import type { Recipe, RecipeIngredient } from '../../../types/Recipe/Recipe'
import type { Ingredient } from '../../../types/ingredients/Ingredient'
import { addRecipe } from '../../../store/recipeSlice'

const emptyIngredient: RecipeIngredient = {
  ingredient: {} as Ingredient, // placeholder for now
  amount: 0,
  unit: 'g',
}

const RecipeForm = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState<Recipe>({
    name: '',
    slug: '',
    imgPath: '',
    time: '',
    servings: 1,
    ingredients: [],
    process: [],
  })

  const updateField =
    (key: keyof Recipe) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        e.target.type === 'number' ? Number(e.target.value) : e.target.value

      setForm((prev) => ({ ...prev, [key]: value }))
    }

  const addIngredient = () =>
    setForm((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, structuredClone(emptyIngredient)],
    }))

  const removeIngredient = (index: number) => {
    setForm((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }))
  }

  const addStep = () =>
    setForm((prev) => ({ ...prev, process: [...prev.process, ''] }))

  const updateStep = (index: number, value: string) => {
    setForm((prev) => {
      const process = [...prev.process]
      process[index] = value
      return { ...prev, process }
    })
  }

  const removeStep = (index: number) => {
    setForm((prev) => ({
      ...prev,
      process: prev.process.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = () => {
    dispatch(addRecipe(form))
  }

  return (
    <Grid
      container
      justifyContent={'center'}
      textAlign={'center'}
      justifySelf={'center'}
      rowGap={2}
      rowSpacing={2}
      spacing={2}
      maxWidth={500}
    >
      {' '}
      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          label='Recipe name'
          value={form.name}
          onChange={updateField('name')}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          label='Time'
          value={form.time}
          onChange={updateField('time')}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          label='Servings'
          type='number'
          value={form.servings}
          onChange={updateField('servings')}
        />
      </Grid>
      {/* Ingredients */}
      <Grid size={{ xs: 12 }}>
        <Typography variant='h6'>Ingredients</Typography>
      </Grid>
      
      <Grid size={{ xs: 12 }}>
        <Button startIcon={<AddIcon />} onClick={addIngredient}>
          Add ingredient
        </Button>
      </Grid>
      {/* Process */}
      <Grid size={{ xs: 12 }}>
        <Typography variant='h6'>Cooking process</Typography>
      </Grid>
      {form.process.map((step, index) => (
        <>
          <Grid size={{ xs: 10 }}>
            <TextField
              fullWidth
              label={`Step ${index + 1}`}
              value={step}
              onChange={(e) => updateStep(index, e.target.value)}
              multiline
            />
          </Grid>

          <Grid size={{ xs: 2 }}>
            <IconButton onClick={() => removeStep(index)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </>
      ))}
      <Grid size={{ xs: 12 }}>
        <Button startIcon={<AddIcon />} onClick={addStep}>
          Add step
        </Button>
      </Grid>
      {/* Submit */}
      <Grid size={{ xs: 12 }}>
        <Button fullWidth variant='contained' onClick={handleSubmit}>
          Save recipe
        </Button>
      </Grid>
    </Grid>
  )
}

export default RecipeForm
