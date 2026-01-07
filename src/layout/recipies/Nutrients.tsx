import type { Recipe } from "../../types/Recipe/Recipe";
import { calculateMacros } from "../../utils/nutrients/MacroCalculator";
import { objectMacroKeys, numericMacroKeys } from "../../types/ingredients/Macros";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface NutrientsProps {
    recipe: Recipe;
}

const Nutrients = ({ recipe }: NutrientsProps) => {
    const { total, perServing } = calculateMacros(recipe);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Macro</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Per Serving</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Object macros */}
                    {objectMacroKeys.map((key) => {
                        const nestedKeys = Object.keys(total[key]) as Array<keyof typeof total[typeof key]>;
                        return nestedKeys.map((subKey) => (
                            <TableRow key={`${key}-${subKey}`}>
                                <TableCell>
                                    {key.charAt(0).toUpperCase() + key.slice(1)} {subKey}
                                </TableCell>
                                <TableCell align="right">{total[key][subKey]}</TableCell>
                                <TableCell align="right">{perServing[key][subKey]}</TableCell>
                            </TableRow>
                        ));
                    })}

                    {/* Numeric macros */}
                    {numericMacroKeys.map((key) => (
                        <TableRow key={key}>
                            <TableCell>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
                            <TableCell align="right">{total[key].toFixed(2)}</TableCell>
                            <TableCell align="right">{perServing[key].toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Nutrients;
