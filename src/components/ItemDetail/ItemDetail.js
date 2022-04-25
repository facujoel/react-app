import { ItemCount } from "../ItemCount/ItemCount"
import {Button} from 'react-bootstrap'
import { CartContext } from "../CartContext/CartContext"
import {Fragment, useContext, useState} from 'react'
import { Link } from "react-router-dom"




export const ItemDetail = ({id,nombre,img,desc,precio,stock,categoria}) => {


  const [cantidad,setCantidad] = useState(0)

  const {cart,agregarAlCarrito, isInCart} = useContext(CartContext)

  console.log(cart);

    const handleAgregar =() =>{

      if (cantidad === 0) return

      if(!isInCart(id)){
        const addItem={
          id, nombre, precio,stock, cantidad
        }
  
        agregarAlCarrito(addItem);
      }

      }




  return (
    <div>

        <h3>{nombre}</h3>
        <img src= {img} alt= {nombre}/>
        <p> {desc} </p>
        <h5> Precio: $ {precio} </h5>

        {
          isInCart(id)
          ?
            <Link to= "/cart" className=" btn btn-success my-3">
                Terminar mi compra
            </Link>
            : 
        <Fragment>
        <ItemCount
          max={stock} 
          counter={cantidad}
          setCounter={setCantidad} />
        
        
        <hr/>

        <button className="btn btn-success" 
        onClick={handleAgregar}
        disabled={cantidad === 0}
        
        >
          
           Agregar al carrito
        
        </button>
          
          </Fragment>
        }



    </div>
  )
}
