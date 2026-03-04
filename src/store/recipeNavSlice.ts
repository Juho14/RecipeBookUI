import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface RecipeNavState {
  navMap: Record<string, number[]>;
}

const initialState: RecipeNavState = { navMap: {} };

const recipeNavSlice = createSlice({
  name: 'recipeNav',
  initialState,
  reducers: {
    setRecipeNavMap: (state, action: PayloadAction<Record<string, number[]>>) => {
      state.navMap = action.payload;
    }
  }
});

export const { setRecipeNavMap } = recipeNavSlice.actions;
export default recipeNavSlice.reducer;