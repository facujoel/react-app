import { ItemCount } from "../ItemCount/ItemCount"
import {Button} from 'react-bootstrap'
import {useState} from 'react'




export const ItemDetail = ({id,nombre,img,desc,precio,stock,categoria}) => {


  const [cantidad,setCantidad] = useState(0)



    const handleAgregar =() =>{

      if (cantidad === 0) return

      const addItem={
        id, nombre, precio,stock, cantidad
      }

      console.log(addItem);
    }



  return (
    <div>

        <h3>{nombre}</h3>
        <img src= {img} alt= {nombre}/>
        <p> {desc} </p>
        <h5> Precio: $ {precio} </h5>

        <ItemCount
          max={stock} 
          counter={cantidad}
          setCounter={setCantidad} />

        <hr/>

        <button className="btn btn-success" onClick={handleAgregar}
        
        >
          
           Agregar al carrito
        
        </button>
    </div>
  )
}
