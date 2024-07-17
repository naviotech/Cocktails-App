
type PaginationProps ={
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentPage: number
  numberPage: number
}

const Pagination = ({setCurrentPage, currentPage, numberPage} : PaginationProps) => {

  const next = () =>{
    if(currentPage !== numberPage){
      const newCurrent = currentPage +1
      setCurrentPage(newCurrent)
    }
  }

  const prev = () => {
    if(currentPage !== 1){
      const newCurrent = currentPage -1
      setCurrentPage(newCurrent)
    }
  }
  return (
    <>
      <div className="w-full flex justify-center items-center gap-6 absolute -bottom-7 md:-bottom-14 lg:-bottom-14 ">
        <a href="#main" className="text-xl text-black/50 hover:text-black" onClick={prev}>{"<- Prev"}</a>
        <p className="font-bold">{currentPage} / {numberPage}</p>
        <a href="#main" className="text-xl text-black/50 hover:text-black" onClick={next}>{"Next ->"}</a>
      </div>
    </>
  )
}

export default Pagination
