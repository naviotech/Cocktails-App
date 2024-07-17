import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Favourites from "./pages/Favourites/Favourites"
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h1 className="text-4xl text-black/70 font-bold justify-center flex items-center h-screen">404 NOT FOUND</h1>}/>
          <Route path="/" element={<Home/>} index/>
          <Route path="/favoritos" element={<Favourites/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
