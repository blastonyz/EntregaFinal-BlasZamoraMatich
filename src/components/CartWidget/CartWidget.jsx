import carrito from './assets/carrito.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext)
  return (
    <Link to = '/cart' className='CartWidget' style={{display: cantidadTotal>0?'block':'none'}}>
        <img src={carrito} alt="cartwidget" className='cart'/>
        {cantidadTotal}
    </Link>
  )
}
