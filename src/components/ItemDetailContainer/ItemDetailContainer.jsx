import { useState,useEffect } from "react";
import { getProductosId } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import {doc,getDoc} from "firebase/firestore"
import {db} from "../../services/firebase/firebaseConfig"

 export const ItemDetailContainer = ()=> {
    const [productos,setProductos] = useState(null)
    const [loading,setLoading] = useState(true)  

         const {itemId} = useParams()

     useEffect(()=> {
        setLoading(true)

        const docRef = doc(db,'productos',itemId)

        getDoc(docRef)
        
        .then(response =>{
            const data = response.data()
            const productosAdapted = {id: response.id, ...data}
            setProductos(productosAdapted)
            }
         )
        .catch(error=> {
            console.error(error)
        }) 
        .finally(()=>{setLoading(false)})
     },[itemId])

     return(
        <div className="ItemDetailContainer">
            <ItemDetail{...productos}/>
        </div>
     )
}

