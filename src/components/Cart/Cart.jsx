import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom";

export const Cart = () => {
    const {cart,cleanCart,cantidadTotal,precioTotal} = useContext(CartContext)

    if(cantidadTotal === 0){
        return(
            <div>
                <h1>No Hay Productos en el Carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }
    return(
        <div>
            {cart.map(p=> <CartItem key={p.id}{...p}/>)}
            <h3>Total: ${precioTotal()}</h3>
            <button onClick={()=>cleanCart } className="Button">Limpiar
            </button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}