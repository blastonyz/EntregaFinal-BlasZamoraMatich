import { useState,useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import {getDocs,collection,query,where} from 'firebase/firestore'
import {db} from '../../services/firebaseConfig'
import React from 'react'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'


export const ItemsListCont = ({greeting}) => {
    const  [productos,setProductos] = useState([])
    const  [loading,setLoading] = useState(false) 
      
    const {categoriaId} = useParams() 

        useEffect(() => {

          setLoading(true)
         
          const collectionRef = categoriaId?query(collection(db,'Items'),where('categoria','==',categoriaId)): collection(db,'Items')

          getDocs(collectionRef)
          .then(response => {
            const productosAdapted = response.doc.map(doc=>{const data = doc.data()
              return{id:doc.id,...data}
            })
            setProductos(productosAdapted)
           })
          .catch(error=> {console.log(error)
          })
          .finally(()=>{
            setLoading(false)
          })
        }
      
        ,[itemId])
        
        
  return (
    <React.Fragment>
    <div className='greeting'>
      {loading?<h3>Loading...</h3>:
       
        <ItemList productos={productos}/>}
    </div>
    </React.Fragment>
  )
}

