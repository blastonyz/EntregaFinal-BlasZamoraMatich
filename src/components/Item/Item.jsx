
export const Item = ({id,nombre,precio,img,stock}) => {

        return(
            <article className="CardItem">
                    <header className="Header">
                        <h2 className="ItemHeader">
                            {nombre}
                        </h2>
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
                        <button className="Option">Ver detalle</button>
                    </footer>
            </article>
        )


}