import type { InfoRecipe } from "../../../types/appTypes"
import { useAppStore } from "../../../zustand/useAppStore"

import { Store } from 'react-notifications-component'

type ModalProps ={
  info: InfoRecipe,
  handleClick: (e: React.MouseEvent) => void
}

const ModalInfoFav = ({info, handleClick}: ModalProps) => {
  const handleClickFav = useAppStore((state)=>state.handleClickFavorite)
  const recipeInfoResponse = useAppStore((state)=> state.infoRecipe[0])
  const arrayFavorites = useAppStore((state)=> state.favorites)

  const renderIngredients = () =>{
    const ingredients = []
    for(let i =1; i<= 15; i++){
      const ingredient = info[`strIngredient${i}` as keyof InfoRecipe]
      const measure = info[`strMeasure${i}` as keyof InfoRecipe]
      if(ingredient && measure){
        ingredients.push(
          <li className="list-disc" key={i}>
            {ingredient} - {measure}
          </li>
        )
      }
    }
    return ingredients
  }

  return (
    <article className="bg-white border rounded-xl max-w-[500px] h-[80vh] overflow-y-auto">
      <header className="overflow-hidden rounded-t-xl">
        <img src={info.strDrinkThumb} alt={`Image for ${info.strDrink}`}></img>
      </header>
      <main className="flex flex-col p-8 gap-5 relative">
        <h1 className="text-2xl font-bold ">{info.strDrink} ({info.strCategory})</h1>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">Ingredients</h3>
          <ol className="text-black/50 flex flex-col justify-start px-4">
            {renderIngredients()}
          </ol>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl">Instructions</h3>
          <p className="text-black/50">{info.strInstructions}</p>
        </div>
        <div className="mt-5 flex gap-4">
          <button onClick={() => {
            handleClickFav(recipeInfoResponse)
            const notificationMessage = arrayFavorites.some(drink => drink.idDrink === info.idDrink) ? "The item has been removed to favorites." : "The item has been added to favorites."
            const notificationType = arrayFavorites.some(drink => drink.idDrink === info.idDrink) ? "danger" : "success"
            const notificationTitle = arrayFavorites.some(drink => drink.idDrink === info.idDrink) ? "Deleted" : "Added"
            Store.addNotification({
              title: notificationTitle,
              message: notificationMessage,
              type: notificationType,
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__zoomOut"],
              dismiss: {
                duration: 2000,
                onScreen: true
              }
            })
          }} className={arrayFavorites.some(drink => drink.idDrink === info.idDrink)? "w-full rounded-xl bg-yellow-600 hover:bg-yellow-300 transition-colors font-bold text-white p-2 uppercase": "w-full rounded-xl bg-green-600 hover:bg-green-300 transition-colors font-bold text-white p-2 uppercase" }>{arrayFavorites.some(drink => drink.idDrink === info.idDrink)? "Delete Favorites" : "Add Favorites"} </button>
          <button onClick={handleClick} className="w-full rounded-xl bg-red-600 hover:bg-red-300 transition-colors font-bold text-white p-2 uppercase">Close</button>
        </div>
      </main>
    </article>
  )
}

export default ModalInfoFav
