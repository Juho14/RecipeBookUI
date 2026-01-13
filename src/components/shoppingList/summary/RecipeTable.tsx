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
import { getIngredientName } from '../../../utils/ingredientUtils/getIngredientName'

type RecipeTableProps = {
  ingredientsByRecipe: ReturnType<typeof groupIngByRecipe>
}

const RecipeTable = ({ ingredientsByRecipe }: RecipeTableProps) => (
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
        {ingredientsByRecipe.map((group) =>
          group.ingredients.map((item, index) => (
            <TableRow key={`${group.recipeId}-${index}`}>
              {index === 0 && (
                <TableCell rowSpan={group.ingredients.length}>
                  <Typography fontWeight={500}>{group.recipeName}</Typography>
                </TableCell>
              )}

              <TableCell>{getIngredientName(item.ingredientId)}</TableCell>

              <TableCell>
                {item.amount} {item.unit}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
)
export default RecipeTable
