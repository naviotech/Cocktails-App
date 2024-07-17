import ReactDOM  from "react-dom"
import { ReactNode } from "react";
type ModalProps = {
  children: ReactNode,
  handleModal: (e: React.MouseEvent) => void
};
const portalRootFav = document.getElementById("portal-root-fav")
const ModalFav = ({handleModal, children}: ModalProps) => {
  if (!portalRootFav) return null
  return ReactDOM.createPortal(
    <div onClick={handleModal} className='p-8 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      {children}
    </div>,
    portalRootFav
  )
}

export default ModalFav