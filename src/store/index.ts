import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { recipeApi } from "./recipe/recipe.api";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
});