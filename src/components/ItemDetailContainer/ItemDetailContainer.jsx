import { useState,useEffect } from "react";
import { getProductosId } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

 export const ItemDetailContainer = ()=> {
    const [productos,setProductos] = useState(null)
      
         const {itemId} = useParams()
     useEffect(()=> {
        getProductosId(itemId)
        .then(response =>{setProductos(response)}
         )
        .catch(error=> {
            console.error(error)
        }) 
     },[itemId])

     return(
        <div className="ItemDetailContainer">
            <ItemDetail{...productos}/>
        </div>
     )
}

