import { useContext, useState } from "react"
import {db} from "../../services/firebaseConfig"
import { CartContext } from "../../context/CartContext"
import {addDoc, collection, documentId, query, where, writeBatch,getDocs, Timestamp } from "firebase/firestore"
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"

export const Checkout = () => {
    const [loading,setLoading] = useState(false)
    const [orderId,setOrderId] = useState('')

    const {cart,precioTotal,cleanCart} = useContext(CartContext)

    const createOrder = async ({client,phone,email}) => {
        setLoading(true)

        try{
            const objOrder = {
                comprador:{
                    client,phone,email
                },
                items: cart,
                precioTotal: precioTotal,
                date: Timestamp.fromDate(new Date())
            }
            const bacth = writeBatch(db)

            const outOfStock = []
            
            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db,'Items')

            const productsFirestore = await getDocs(query(productsRef,where(documentId(),'in',ids)))

            const {docs} = productsFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productosAgregados = cart.find(prod => prod.id === doc.id)

                const cantidadAdded = productosAgregados?.cantidad

                if(stockDb >= cantidadAdded){
                    bacth.update(doc.ref,{stock: stockDb - cantidadAdded})
                } else{
                    outOfStock.push({id: doc.id,...dataDoc })
                }
            })
                if(outOfStock.length === 0)  {
                    await bacth.commit()
                    const orderRef = collection(db,'Orders')
                    const orderAdded = await addDoc(orderRef,objOrder)

                    setOrderId(orderAdded.id)
                    cleanCart()
                }else{
                    console.error('productos con faltante')
                }
        
            }catch(error){
                   console.error('no hay faltantes de stock')
             }finally{
                        setLoading(false)
    }
    }
    if(loading){
        return <h1>Se esta generando su orden...</h1>
    }

    if(orderId){
        return <h1>el id desu Orden es : {orderId}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}
