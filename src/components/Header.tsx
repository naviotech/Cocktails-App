import { NavLink, useLocation } from "react-router-dom"

const Header = () => {
  const { pathname } = useLocation()
  return (
    <header className={pathname === "/" ? " w-full flex flex-col justify-center items-center" : " w-full bg-slate-800 flex flex-col justify-center items-center"}>
      <article className="px-6 py-10 flex items-center justify-between max-w-screen-xl w-full">
        <figure>
          <img className="w-16" src="/src/assets/svg/logo.svg"></img>
        </figure>
        <nav className="flex gap-6 text-white text-lg">
          <NavLink
            to="/" 
            className={({isActive}) => isActive ? 'text-orange-400' : 'text-white'} 
            >Home
          </NavLink>

          <NavLink
            to="/favoritos" 
            className={({isActive}) => isActive ? 'text-orange-400' : 'text-white'} 
            >Favorites
          </NavLink>
        </nav>
      </article>
    </header>
  )
}

export default Header
