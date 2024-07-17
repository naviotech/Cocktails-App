import { StateCreator } from "zustand"
import { InfoRecipe } from "../types/appTypes"

export type FavoritesSliceType = {
  favorites: InfoRecipe[]
  handleClickFavorite: (info : InfoRecipe) => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType> = (set, get) => {
  const storedFavorites = localStorage.getItem("favorites")
  const initialFavorites = storedFavorites ? JSON.parse(storedFavorites) : []

  return {
    favorites: initialFavorites,
    handleClickFavorite: (info)=>{
      if(get().favorites.some(favorite => favorite.idDrink === info.idDrink)){
        const newFavorites = get().favorites.filter(drink => drink.idDrink !== info.idDrink)
        localStorage.setItem("favorites",JSON.stringify(newFavorites))
        set(()=>({
          favorites: newFavorites
        }))
      }else{
        const newFavorites = [...get().favorites, info]
        localStorage.setItem("favorites",JSON.stringify(newFavorites))
        set(()=>({
          favorites: newFavorites
        }))
      }
    }
  }
}