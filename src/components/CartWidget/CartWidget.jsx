
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext)
  return (
    <Link to = '/cart' className='CartWidget' >
        <img src="https://firebasestorage.googleapis.com/v0/b/blasantoniozamora-react.appspot.com/o/carrito.svg?alt=media&token=9bf62027-e065-4507-b2b6-e1d562817ae6" alt="cartwidget" className='cart'/>
        {cantidadTotal()}
    </Link>
  )
}
