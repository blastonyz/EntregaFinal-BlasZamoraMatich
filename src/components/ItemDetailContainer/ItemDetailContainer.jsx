import { useState,useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import {doc,getDoc} from "firebase/firestore"
import {db} from "../../services/firebaseConfig"
import React from "react";

 export const ItemDetailContainer = ()=> {
    const [productos,setProductos] = useState(null)
    const [loading,setLoading] = useState(true)  

         const {itemId} = useParams()

     useEffect(()=> {
        setLoading(true)

        const docRef = doc(db,'Items',itemId)

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
       <React.Fragment>
        <div className="ItemDetailContainer">
        {loading?<h3>Loading...</h3>:<ItemDetail{...productos}/>}
        </div> 
       </React.Fragment>
     )
}
