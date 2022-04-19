import React, { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import pedirDatos from '../pedirDatos/pedirDatos';


export const ItemListContainer = ( {} ) => {
  
  const [productos,setProductos] = useState ([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)


    pedirDatos()
      .then ((res) => {
        setProductos (res)
      })
      .catch((err) =>{
         console.log(err);
      })
      .finally(()=>{
        setLoading(false)
      })

  },[])

 
  return (
  <>
    {
      loading ? <h2>Loading...</h2> : 
      <ItemList productos= {productos}/>
    }
  </>
  )
}
