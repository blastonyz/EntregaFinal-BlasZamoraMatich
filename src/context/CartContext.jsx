import {createContext,useState  } from "react";

export const CartContext = createContext({
      cart: []
})

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    console.log(cart)

    const addItem = (item,cantidad) => {
        if(!isInCart(item.id)) {
            setCart(prev =>[...prev,{...item,cantidad}])
        }else{
            console.error('el producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const cleanCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const precioTotal = () => {
        return cart.reduce((acc,prod)=>(acc += prod.precio * prod.cantidad),0)
    
    }

    const cantidadTotal = () => {
        return cart.reduce((acc,prod) => (acc +=  prod.cantidad),0)
       
    }



    return(
        <CartContext.Provider value={{cart,addItem,removeItem,cleanCart,cantidadTotal,precioTotal}}>
            {children}
        </CartContext.Provider>
    )
}