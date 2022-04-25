import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/FireBase';
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = ( {} ) => {
  
  const [productos,setProductos] = useState ([])
  const [loading, setLoading] = useState(false)

  const {catId} = useParams()
  


  useEffect( () => {
    setLoading(true)

      
      const productosRef = collection(db, "productos")

      getDocs(productosRef)
      .then(resp => {
        const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        
        setProductos(items)
    })
    .finally(() => {
        setLoading(false)
    })


  },[catId])

 
  if(loading){
    return <h2>Loading...</h2>
  }
  return <ItemList productos={productos}/>
  
}
