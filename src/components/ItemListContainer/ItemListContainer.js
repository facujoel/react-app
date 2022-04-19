import React, { useEffect, useState } from 'react'

import { Item } from '../Item/Item';


import pedirDatos from '../pedirDatos/pedirDatos';






export const ItemListContainer = ( {} ) => {
  
  const [productos,setProductos] = useState ([])





  useEffect(() => {

    pedirDatos()
      .then ((res) => {
        setProductos (res)
      })
      .catch((err) =>{
        console.log(err);
      })
      .finally(()=>{
        console.log("Fin del proceso");
      })

  },[])

 

  return (
  <div> 
    

    {productos.map( (el)=> <Item nombre= {el.nombre} precio= {el.precio} img= {el.img} desc={el.desc} /> )}
      

  </div> 
  )
}
