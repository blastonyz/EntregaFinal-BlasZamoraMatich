import './ItemCount.css'
import { useState } from 'react'

export const ItemCount = ({stock,initial,onAdd}) => {
    const [cantidad,setCantidad] = useState(initial)

    const incrementa = ()=>{
        if (cantidad < stock) {
            setCantidad(cantidad+1)
                             }
            }
    
    const decrementa = () => {
        if (cantidad>1) {
            setCantidad(cantidad-1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className='button Resta'onClick={decrementa}>-</button>
                <h4 className='Total'>{cantidad}</h4>
                <button className='button Suma' onClick={incrementa}>+</button>
            </div>
            <div>
                <button className='button Agrega' onClick={()=>onAdd(cantidad)} disabled = {!stock}>Agrega al Carrito 
                </button>
            </div>
        </div>
    )
}