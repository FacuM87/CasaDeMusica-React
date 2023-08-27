import React, { useContext } from 'react'
import "./Cart.css"
import { CartContext } from '../../CartContext/CartContext'

const Cart = () => {

    const {carrito, removerItemDelCarrito} = useContext(CartContext)

    if (carrito.length===0) {
        return <h1 className="position-absolute top-50 start-50 translate-middle">Carrito Vacío</h1>
    } else {
        return(
        <div className="position-absolute top-50 start-50 translate-middle mt-4">
        {
            carrito.map((item) =>
            <div key={item.id} className="cartElement">

                <h5>{item.product}</h5>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio x Unidad: ${item.price}</p>
                <p>Subtotal: ${item.quantity * item.price}</p>
                <button onClick={() => removerItemDelCarrito(item.id)}>X</button>

            </div>
            )
        }
        </div>)
    }
}

export default Cart