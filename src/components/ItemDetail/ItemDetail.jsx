import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



export const ItemDetail =  ({id,nombre,precio,categoria,img,descripcion,checkaout,stock}) => {   const [cantidadAdded,setCantidadAdded] = useState(0)
    const {addItem}= useContext(CartContext)

    let item = {nombre,precio,categoria,checkaout,stock,img}

    const handlerAdd = (cantidad) =>{
        setCantidadAdded(cantidad)
        const item = {
            id,nombre,precio
        }
        addItem(item,cantidad)
    }
    return(
            <article className='CardItem'>
                <header className='Header'>
                    <h2 className='ItemHeader'>
                        {nombre}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={nombre} className='ItemImg' />
                </picture>
                <section>
                    <p className='Info'>
                        Categoria: {categoria}
                    </p>
                    <p className='Info'>
                        Descripcion: {descripcion}
                    </p>
                    <p className='Info'>
                        Precio: ${precio}
                    </p>
                    <p className='Info'>
                        Comprar: {checkaout}
                    </p>
                </section>
                <footer className='ItemFooter' >
                   {
                         cantidadAdded > 0 ?(
                        <Link to='/cart'className='Option' >Terminar Compra</Link>):(
                        <ItemCount initial={1} stock={stock} onAdd={handlerAdd} item={item}/>
                        )
                    }

                </footer>
            </article>
    )
}