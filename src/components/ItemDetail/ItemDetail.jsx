import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail =  ({id,nombre,precio,categoria,img,descripcion,checkaout,stock}) => {
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
                    <ItemCount initial={1} stock={stock} onAdd={(cantidad)=>console.log("cantidad agregada",cantidad)}/>
                </footer>
            </article>
    )
}