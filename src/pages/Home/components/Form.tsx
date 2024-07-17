import { useEffect, useState } from "react"
import { useAppStore } from "../../../zustand/useAppStore"
const Form = () => {
  const [filters, setFilters] = useState({
    ingredient: "",
    category: "",
    alcohol: true
  })

  

  const fetchIngredients = useAppStore((state)=> state.fetchIngredients)
  const ingredients = useAppStore((state)=> state.ingredients)
  const search = useAppStore((state)=> state.searchRecipes)

  const handleSubmit= (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!filters.ingredient || !filters.category){
      console.log("todos los campos son obligatorios")
      return
    }
    search(filters)
    setFilters({
      ingredient: "",
      category: "",
      alcohol: true
    })
  }
  useEffect(()=>{
    fetchIngredients()
  },[fetchIngredients])

  return (
    <article className="px-6 py-10">
      <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 p-10 rounded-xl shadow-xl flex flex-col gap-6"
        onSubmit={handleSubmit}>
        <div className="flex flex-col text-white space-y-4">
          <label htmlFor="ingrediente" className="uppercase font-semibold">Ingredients</label>
          <select
          value={filters.ingredient}
          onChange={(e) => setFilters({...filters, ingredient: e.target.value
          })}
          id="ingrediente"
          name="ingrediente" 
          className="p-2 w-full rounded-lg focus:outline-none text-black px-4">
            <option disabled value={""}>--</option>
            {ingredients.length && 
              ingredients.map((ingredients)=> (
                <option 
                key={ingredients.strIngredient1}
                value={ingredients.strIngredient1}
                >
                  {ingredients.strIngredient1}
                </option>
              ))
            }
            
          </select>
        </div>

        <div className="flex flex-col text-white space-y-4">
          <label htmlFor="categoria" className="uppercase font-semibold">Category</label>
          <select name="categoria" id="categoria" className="p-2 w-full rounded-lg focus:outline-none text-black px-4"
            value={filters.category}
            onChange={(e) => setFilters({...filters, category: e.target.value
            })}>
            <option disabled value={""}>--</option>
            <option value="Ordinary_Drink">Ordinary Drink</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Shake">Shake</option>
            <option value="Cocoa">Cocoa</option>
            <option value="Shot">Shot</option>
            <option value="Coffee%20/%20Tea">Coffe / tea</option>
            <option value="Homemade%20Liqueur">Homemade Liqueur</option>
            <option value="Punch%20/%20Party%20Drink">Punch / Party Drink</option>
            <option value="Beer">Beer</option>
            <option value="Soft%20Drink">Soft Drink</option>
            <option value="Other%20/%20Unknown">Other / unknown</option>

          </select>
        </div>

        <div className="flex gap-2 capitalise text-white font-semibold">
          <input type="checkbox" id="alcohol"
          checked={filters.alcohol? false : true}
          onChange={() => setFilters({...filters, alcohol: !filters.alcohol})}/>
          <label htmlFor="alcohol">No Alcoholic</label>
        </div>
        <button type="submit" 
        className="p-2 font-bold w-full text-center bg-orange-950 text-white rounded-xl hover:bg-white hover:text-orange-950"
        >Search</button>
      </form>
    </article>
  )
}

export default Form
