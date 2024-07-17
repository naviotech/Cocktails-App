import axios from "axios"
import { IngredientsApiResponse, RecipesApiResponse, RecipesApiResponseInfo } from "../utils/recipes.schema"
import { SchemaSearchRecipes } from "../types/appTypes"

export async function getIngredients (){
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  try {
    const { data } = await axios(url)
    const response = IngredientsApiResponse.safeParse(data)
    if(response.success){
      return response.data.drinks
    }
  } catch (error) {
    console.log(error)
  }
  
}

export async function getRecipes (filters : SchemaSearchRecipes){
  try {
    if(filters.alcohol){
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}&a=Alcoholic`
      const { data } = await axios(url)
      const response = RecipesApiResponse.safeParse(data)
      return response.data?.drinks
    }else{
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}&a=Non_Alcoholic`
      const { data } = await axios(url)
      const response = RecipesApiResponse.safeParse(data)
      return response.data?.drinks
    }
  } catch (error) {
    console.log(error)
  }
  
}

export async function getInfoRecipe (id : string) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const response = RecipesApiResponseInfo.safeParse(data)
    return response.data?.drinks
  } catch (error) {
    console.log(error)
  }
}