import { useLocation } from "react-router-dom"

const Footer = () => {
  const { pathname } = useLocation()
  return (
    <>
      <footer className="w-full bg-slate-800 flex flex-col justify-center items-center mt-16 md:mt-28 ">
        <article className={pathname=== "/" ? "px-6 py-10 flex items-center justify-center max-w-screen-xl w-full md:py-20": "px-6 py-10 flex items-center justify-center max-w-screen-xl w-full "}>
          <figure>
            <img className="w-16" src="/svg/logo.svg"></img>
          </figure>
          
        </article>
    </footer>
    </>
  )
}

export default Footer
