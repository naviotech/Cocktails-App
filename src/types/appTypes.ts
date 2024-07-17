import { z } from "zod"

export type SchemaSearchRecipes = {
  ingredient: string,
  category: string,
  alcohol: boolean
}
export type Ingredients = {
  strIngredient1: string
}

export type Recipes = {
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string
}

export const RecipeInfo =
  z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strCategory: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strIngredient7: z.string().nullable(),
    strIngredient8: z.string().nullable(),
    strIngredient9: z.string().nullable(),
    strIngredient10: z.string().nullable(),
    strIngredient11: z.string().nullable(),
    strIngredient12: z.string().nullable(),
    strIngredient13: z.string().nullable(),
    strIngredient14: z.string().nullable(),
    strIngredient15: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
    strMeasure7: z.string().nullable(),
    strMeasure8: z.string().nullable(),
    strMeasure9: z.string().nullable(),
    strMeasure10: z.string().nullable(),
    strMeasure11: z.string().nullable(),
    strMeasure12: z.string().nullable(),
    strMeasure13: z.string().nullable(),
    strMeasure14: z.string().nullable(),
    strMeasure15: z.string().nullable(),
  })

export type InfoRecipe =z.infer<typeof RecipeInfo>