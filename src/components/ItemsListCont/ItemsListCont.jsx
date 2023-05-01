import React from 'react'
import { useState,useEffect } from 'react'
import { getProductos,getProductosCategoria } from '../../asyncMock'
import { ItemList } from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

export const ItemsListCont = ({greeting}) => {
const  [productos,setProductos] = useState([])
      const {categoriaId} = useParams() 

        useEffect(() => {

          const asyncFunc = categoriaId?getProductosCategoria:getProductos
          
                asyncFunc(categoriaId)
                .then(response =>{
                  setProductos(response)
                })
                .catch(error => { console.error(error)
                })
        },[categoriaId])
        
        
  return (
    <div className='greeting'>
        <h1>
            {greeting}
        </h1>
        <ItemList productos={productos}/>
    </div>
  )
}

/*getProductos()
          .then(response =>{
                setProductos(response)
          })
          .catch(error => {
                  console.error(error)*/