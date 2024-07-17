import {lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"


const Favourites = lazy(()=> import('./pages/Favourites/Favourites'))
const Home = lazy(()=> import('./pages/Home/Home'))

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h1 className="text-4xl text-black/70 font-bold justify-center flex items-center h-screen">404 NOT FOUND</h1>}/>
          <Route path="/" element={<Suspense fallback="Loading..."><Home/></Suspense>} index/>
          <Route path="/favoritos" element={<Suspense fallback="Loading..."><Favourites/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
