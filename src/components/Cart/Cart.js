import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import {BsFillTrashFill} from 'react-icons/bs';
import { Link } from "react-router-dom";



export const Cart = ()=>{

    const {cart,totalCart,vaciarCart,eliminarItem} = useContext(CartContext)

    if(cart.length ===0){
        return <div className="container my-4">
             <h2> Tu carrito está vacío </h2>
             <Link to="/" className=" btn btn-primary"> Volver </Link>
        </div>
    }

    return(
        <div className="container my-4">
            <h2>Tu compra</h2>
        <hr/>
    
        {
            cart.map((item)=>(
                <div key={item.id} >
                    <h4> {item.nombre} </h4>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>precio {item.precio}</p>
                    <button className="btn btn-danger" onClick={ ()=>(eliminarItem(item.id)) } >
                    <BsFillTrashFill/>
                    </button>

                </div>
            ))
        }

        <hr/>
        <h2>Total: ${totalCart()} </h2>

            <div className="my-2">
                <button className="btn btn-danger" onClick= {vaciarCart} > Vaciar carrito </button>
                <Link to="/checkout" className="btn btn-success mx-2" onClick= {vaciarCart} > Terminar compra </Link>
            </div>

        </div>
    )
}