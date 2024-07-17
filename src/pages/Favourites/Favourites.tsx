import Header from "../../components/Header"
import RecipesFav from "./components/RecipesFav"
import Footer from "../../components/Footer"

const Favourites = () => {
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Header/>
      <main className="mt-10 flex flex-col justify-center items-center flex-grow">
        <section className=" w-full px-6 lg:px-12 py-10 flex flex-col justify-center items-center max-w-screen-xl">
          <h1 className="text-center font-bold text-3xl mb-12 sm:mb-24">Favorite Drinks</h1>
          <RecipesFav/>
        </section>
        
      </main>
      <Footer/>
    </div>
  )
}

export default Favourites
