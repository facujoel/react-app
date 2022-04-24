import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import pedirDatos from '../pedirDatos/pedirDatos'

export const ItemDetailContainer = () => {

  const [loading,setLoading] = useState (false)
  const [item,setItem] = useState (null)
  
  
  const {itemId} = useParams()
    


  useEffect (() => {
    setLoading (true)

    pedirDatos()
      .then ((res)=>{
        setItem(res.find((el) => el.id === Number(itemId)))
      })
      .finally(()=> {
        setLoading(false)
      })

  },[])

  return (
    <div className='container my-5'>
        {
          loading
          ? <h2>Cargando...</h2>
           :<ItemDetail {...item}/>
         }
    </div>
  )
}