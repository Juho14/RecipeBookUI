// src/store/recipeSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Recipe } from "../types/Recipe/Recipe";

interface RecipeState {
    activeRecipe: Recipe | null;
}

const initialState: RecipeState = {
    activeRecipe: null,
};

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        setActiveRecipe: (state, action: PayloadAction<Recipe>) => {
            state.activeRecipe = action.payload;
        },
        clearActiveRecipe: (state) => {
            state.activeRecipe = null;
        },
    },
});

export const { setActiveRecipe, clearActiveRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
