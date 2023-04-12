import React from 'react'
import carrito from './assets/carrito.svg'
export const CartWidget = () => {
  return (
    <div className = "cartwid">
        <img src={carrito} alt="cartwidget" className='cart'/>
        0
    </div>
  )
}
