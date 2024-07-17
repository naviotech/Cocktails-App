import { useMemo, useState, useEffect } from "react"
import { useAppStore } from "../../../zustand/useAppStore"
import { InfoRecipe } from "../../../types/appTypes"

import ModalInfoFav from "./ModalInfoFav"
import ModalFav from "./ModalFav"

const RecipesFav = () => {
  const favorites = useAppStore((state)=>state.favorites)
  const recipeInfo = useAppStore((state)=> state.selectRecipe)
  const recipeInfoResponseFav = useAppStore((state)=> state.infoRecipe[0])
  const hasDrinks = useMemo(()=>favorites.length,[favorites])

  const [selectItem, setSelectItem] = useState<InfoRecipe | null>(null)
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal(!modal)
    setSelectItem(null)
  }

  const handleModal = (e: React.MouseEvent<Element, MouseEvent>)=>{
    const target = e.target as HTMLElement
    if(target.matches('.fixed')){
      handleClick()
      setSelectItem(null)
    }
  }
  useEffect(()=>{
    if(recipeInfoResponseFav){
      setSelectItem(recipeInfoResponseFav)
    }
  },[recipeInfoResponseFav])

  return (
    <section className={ hasDrinks ? "flex flex-wrap gap-14 items-center justify-center max-w-screen-xl w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" : "flex flex-col justyfy-center items-center w-full"}>
      {hasDrinks ? (
        <>
          {favorites.map((drink)=>(
            <article key={drink.idDrink} className="border shadow-lg flex flex-col max-w-lg rounded-xl " >
              <header className="overflow-hidden rounded-t-xl">
                <img src={drink.strDrinkThumb} alt={`Image for ${drink.strDrink}`} className="hover:scale-110 transition-transform"></img>
              </header>
              <main className="p-5">
                <h2 className="text-2xl truncate">{drink.strDrink}</h2>
                <button onClick={()=>{recipeInfo(drink.idDrink), handleClick()}} type="button" className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg">Show Recipe</button>
              </main>
            </article>
          ))}
        </>
      )
      :(<p className="text-center text-2xl mt-8 w-full text-black/50">You don't have favorites yet</p>)}
      {modal && recipeInfoResponseFav && <ModalFav handleModal={handleModal} children={selectItem? <ModalInfoFav info={selectItem} handleClick={handleClick}/> : null} /> }
    </section>
  )
}

export default RecipesFav
