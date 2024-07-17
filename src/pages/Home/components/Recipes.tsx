import { useEffect, useMemo, useState } from "react"
import { useAppStore } from "../../../zustand/useAppStore"
import { InfoRecipe } from "../../../types/appTypes"
import Modal from "./Modal"
import ModalInfo from "./ModalInfo"

const Recipes = () => {
  const recipes = useAppStore((state)=>state.recipes)
  const hasDrinks = useMemo(()=>recipes.length, [recipes])
  const recipeInfo = useAppStore((state)=> state.selectRecipe)
  const recipeInfoResponse = useAppStore((state)=> state.infoRecipe[0])

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
    if(recipeInfoResponse){
      setSelectItem(recipeInfoResponse)
    }
  },[recipeInfoResponse])
  return (
    <article className={ hasDrinks ? "flex flex-wrap gap-14 items-center justify-center max-w-screen-xl w-full sm:grid sm:grid-cols-2 xl:grid-cols-3 lg:gap-6" : "flex flex-col justyfy-center items-center w-full"}>
      
      {hasDrinks ? (
        <>
          {recipes.map((recipes)=>(
            <article key={recipes.idDrink} className="border shadow-lg flex flex-col max-w-lg rounded-xl " >
              <header className="overflow-hidden rounded-t-xl">
                <img src={recipes.strDrinkThumb} alt={`Image for ${recipes.strDrink}`} className="hover:scale-110 transition-transform"></img>
              </header>
              <main className="p-5">
                <h2 className="text-2xl truncate">{recipes.strDrink}</h2>
                <button onClick={()=>{recipeInfo(recipes.idDrink), handleClick()}} type="button" className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg">Show Recipe</button>
              </main>
            </article>
          ))}
        </>
      )
      :(<p className="text-center text-2xl mt-8 w-full text-black/50">No recipes yet</p>)}
      <div>
        {modal && recipeInfoResponse && <Modal handleModal={handleModal} children={selectItem? <ModalInfo info={selectItem} handleClick={handleClick}/> : null} /> }
      </div>
    </article>
    
  )
}

export default Recipes
