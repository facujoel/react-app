import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

export const Checkout = () => {

    const {cart, totalCart}= useContext(CartContext)

    const orden= {
        comprador:{
            name: 'Facundo',
            email: 'algo@otroalgo.com',
            tel: 159753465
        },
        
        items: cart,
        total: totalCart()
    }

    
  return (
    <div className='container my-3'>
        <h2>Checkout</h2>
        <hr/>
    </div>
  )
}
