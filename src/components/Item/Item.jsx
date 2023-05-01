import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({id,nombre,precio,img,stock}) => {

        return(
            <article className="CardItem">
                    <header className="Header">
                        <h3 className="ItemHeader">
                            {nombre}
                        </h3>
                    </header>
                    <picture>
                    <img src={img} alt={nombre} className="ItemImg" />
                    </picture>
                    <section>
                        <p className="Info">
                            precio: ${precio}
                        </p>
                        <p className="Info">
                            Stock Disponible: {stock}
                        </p>
                    </section>
                    <footer className="ItemFooter">
                        <Link to={`/item/${id}`} className="Option">Ver detalle
                        </Link>
                    </footer>
            </article>
        )


}