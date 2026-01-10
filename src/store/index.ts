import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";
import langReducer from './langSlice'

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    lang: langReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
