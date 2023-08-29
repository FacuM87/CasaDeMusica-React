import React, { useContext } from 'react'
import "./CartItem.css"
import { CartContext } from '../../CartContext/CartContext'


const CartItem = ({id, product, quantity, price}) => {

    const { removerItemDelCarrito } = useContext(CartContext)

  return (
    <div key={id} className="cartElement">
        <div>
            <h5>{product}</h5>
            <p>Cantidad: {quantity}</p>
        </div>
        <div>
            <p>Precio x Unidad: ${price}</p>
            <p>Subtotal: ${quantity * price}</p>
        </div>
        <div className="buttonContainer">
            <button className="btn btn-primary" onClick={() => removerItemDelCarrito(id)}>Quitar del Carrito</button>
        </div>

    </div>
  )
}

export default CartItem