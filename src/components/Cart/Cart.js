import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

export const Cart = () => {

    const { cart, totalCart, vaciarCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return <div className="container my-5">
                    <h2>Tu carrito está vacío</h2>
                    <hr/>
                    <h5>Vuelve al shop para comprar</h5>
                    <Link to={"/"} className="btn btn-primary">Volver</Link>
                </div>
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <h5>Precio: ${item.precio * item.cantidad}</h5>
                        <button 
                            className="btn btn-danger"
                            onClick={() => removeItem(item.id)}
                        >
                            <BsFillTrashFill/>
                        </button>
                        <hr/>
                    </div>
                ))
            }

            <h3>TOTAL: ${totalCart()}</h3>
            <hr/>
            <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-success mx-3">Terminar mi compra</Link>
        </div>
    )
}