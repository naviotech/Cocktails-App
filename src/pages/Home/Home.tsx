import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Form from "./components/Form"
import Recipes from "./components/Recipes"

function Home() {
  return (
    <>
      <header className="bg-header bg-no-repeat bg-cover lg:px-24 lg:py-16 flex flex-col justify-center items-center">
        <Header/>
        <article className="max-w-screen-xl w-full">
          <Form/>
        </article>
      </header>
      <main className="mt-10 flex flex-col justify-center items-center" id="main">
        <section className="relative w-full px-6 py-10 lg:px-12 flex flex-col justify-center items-center max-w-screen-xl">
          <h1 className="text-center font-bold text-3xl mb-12 sm:mb-24" id="drinks">Drinks</h1>
          <Recipes/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Home

