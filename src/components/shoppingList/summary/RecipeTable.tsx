import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import type { groupIngByRecipe } from '../../../utils/shoppingListUtils/groupIngByRecipe'
import { Fragment } from 'react/jsx-runtime'
import {
  convertCookingUnit,
  getTotalAmountWithUnit
} from '../../../utils/ingredientUtils/cookingUnitConversions'
import { useIngredientNameMap } from '../../../hooks/ingredients/useIngredientNameMap'

type RecipeTableProps = {
  ingredientsByRecipe: ReturnType<typeof groupIngByRecipe>
}

const RecipeTable = ({ ingredientsByRecipe }: RecipeTableProps) => {
  const { getIngredientName } = useIngredientNameMap()

  return (
    <TableContainer component={Paper} elevation={1}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Recipe</TableCell>
            <TableCell>Ingredient</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {ingredientsByRecipe.map((group) => {
            // Group ingredients by ingredientId within the recipe
            const ingredientsById = group.ingredients.reduce<
              Record<number, typeof group.ingredients>
            >((acc, item) => {
              if (!acc[item.ingredientId]) acc[item.ingredientId] = []
              acc[item.ingredientId].push(item)
              return acc
            }, {})

            return (
              <Fragment key={group.recipeId}>
                {Object.entries(ingredientsById).map(
                  ([ingredientId, items], index) => {
                    const { amount, unit } = getTotalAmountWithUnit(items)
                    const convertedUnit = convertCookingUnit(unit)

                    return (
                      <TableRow key={`${group.recipeId}-${ingredientId}`}>
                        {index === 0 && (
                          <TableCell
                            rowSpan={Object.keys(ingredientsById).length}
                          >
                            <Typography fontWeight={500}>
                              {group.recipeName}
                            </Typography>
                          </TableCell>
                        )}

                        <TableCell>
                          {getIngredientName(Number(ingredientId))}
                        </TableCell>

                        <TableCell>
                          {amount} {convertedUnit}
                        </TableCell>
                      </TableRow>
                    )
                  }
                )}
              </Fragment>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RecipeTable
