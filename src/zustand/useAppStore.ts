import { create } from "zustand"
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice"
import { devtools } from "zustand/middleware"
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice"

export const useAppStore = create<RecipeSliceType & FavoritesSliceType>() (devtools((...a) =>({
  ...createRecipeSlice(...a),
  ...createFavoritesSlice(...a)
})))