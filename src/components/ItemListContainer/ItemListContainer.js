import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import pedirDatos from '../pedirDatos/pedirDatos';


export const ItemListContainer = ( {} ) => {
  
  const [productos,setProductos] = useState ([])
  const [loading, setLoading] = useState(false)

  const {catId} = useParams()
  


  useEffect( () => {
    setLoading(true)


    pedirDatos()
      .then ((res) => {
        if (catId) {
            setProductos(res.filter((el) => el.categoria === catId))
        } else{
            setProductos(res)
        }


      })
      .catch((err) =>{
         console.log(err);
      })
      .finally(()=>{
        setLoading(false)
      })

  },[catId])

 
  if(loading){
    return <h2>Loading</h2>
  }
  return <ItemList productos={productos}/>
  
}
