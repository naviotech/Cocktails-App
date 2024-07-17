import { StateCreator } from "zustand"
import { getInfoRecipe, getIngredients, getRecipes } from "../services/RecipeService"
import { Ingredients, Recipes, SchemaSearchRecipes, InfoRecipe } from "../types/appTypes"


export type RecipeSliceType = {
  ingredients: Ingredients[]
  recipes: Recipes[]
  infoRecipe: InfoRecipe[]
  fetchIngredients: () => Promise<void>
  searchRecipes: (filters : SchemaSearchRecipes) => Promise<void>
  selectRecipe: (id : string) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipeSliceType> = (set) =>({
  ingredients: [],
  recipes: [],
  infoRecipe: [],
  fetchIngredients: async () => {
    const ingredients = await getIngredients()
    set({
      ingredients
    })
  },
  searchRecipes: async (filters : SchemaSearchRecipes) =>{
    const recipes = await getRecipes(filters)
    set({
      recipes
    })
  },
  selectRecipe: async (id:string) => {
    const infoRecipe = await getInfoRecipe(id)
    set({
      infoRecipe
    })
  }
})