import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, Button, Grid, type SelectChangeEvent } from '@mui/material'
import type { Ingredient } from '../../types/ingredients/Ingredient'
import { addIngredient } from '../../store/ingredientsSlice'
import Selector from '../inputs/Selector'
import { INGREDIENT_TYPE_OPTIONS } from '../../constants/Data/Ingredients/IngredientTypeOptions'

const IngredientsForm = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState<Ingredient>({
    name: '',
    nameEn: '',
    type: 1,
    macros: {
      kcal: 0,
      fats: { total: 0, saturated: 0 },
      carbs: { total: 0, sugars: 0 },
      protein: 0,
      salt: 0,
    },
  })

  const handleChange =
    (path: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number.isNaN(Number(e.target.value))
        ? e.target.value
        : Number(e.target.value)

      setForm((prev) => {
        const updated = structuredClone(prev)
        const keys = path.split('.')
        let obj: any = updated

        keys.slice(0, -1).forEach((k) => (obj = obj[k]))
        obj[keys.at(-1)!] = value

        return updated
      })
    }

  const handleChangeType = (value: number) => {
    setForm((prev) => ({
      ...prev,
      type: value,
    }))
  }

  const handleSubmit = () => {
    dispatch(addIngredient(form))
  }

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Add ingredients</h3>
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
        {/* Names */}
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label='Name'
            value={form.name}
            onChange={handleChange('name')}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label='English name'
            value={form.nameEn}
            onChange={handleChange('nameEn')}
          />
        </Grid>

        {/* Type */}
        <Grid size={{ xs: 6 }}>
          <Selector
            value={form.type}
            options={INGREDIENT_TYPE_OPTIONS}
            onChange={handleChangeType}
          />
        </Grid>

        {/* kcal */}
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label='kcal / 100g'
            type='number'
            value={form.macros.kcal}
            onChange={handleChange('macros.kcal')}
          />
        </Grid>

        {/* Fats */}
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label='Fat (total)'
            type='number'
            value={form.macros.fats.total}
            onChange={handleChange('macros.fats.total')}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label='Fat (saturated)'
            type='number'
            value={form.macros.fats.saturated}
            onChange={handleChange('macros.fats.saturated')}
          />
        </Grid>

        {/* Carbs */}
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label='Carbs (total)'
            type='number'
            value={form.macros.carbs.total}
            onChange={handleChange('macros.carbs.total')}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label='Carbs (sugars)'
            type='number'
            value={form.macros.carbs.sugars}
            onChange={handleChange('macros.carbs.sugars')}
          />
        </Grid>

        {/* Protein & Salt */}
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label='Protein'
            type='number'
            value={form.macros.protein}
            onChange={handleChange('macros.protein')}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            label='Salt'
            type='number'
            value={form.macros.salt}
            onChange={handleChange('macros.salt')}
          />
        </Grid>

        {/* Submit */}
        <Grid size={{ xs: 6 }}>
          <Button fullWidth variant='contained' onClick={handleSubmit}>
            Save Ingredient
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default IngredientsForm
