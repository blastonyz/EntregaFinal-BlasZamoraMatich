import React from 'react'
import { useState,useEffect } from 'react'
import { getProductos } from '../../asyncMock'
import { ItemList } from '../ItemList/ItemList'

export const ItemsListCont = ({greeting}) => {
const  [productos,setProductos] = useState([])
        useEffect(() => {
          getProductos()
          .then(response =>{
                setProductos(response)
          })
          .catch(error => {
                  console.error(error)
          })
        },[]
        
        )
  return (
    <div className='greeting'>
        <h1>
            {greeting}
        </h1>
        <ItemList productos={productos}/>
    </div>
  )
}
