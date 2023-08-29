import React, { useContext } from 'react'
import "./CartItem.css"
import { CartContext } from '../../CartContext/CartContext'


const CartItem = ({id, product, quantity, price}) => {

    const { removerItemDelCarrito } = useContext(CartContext)

  return (
    <div key={id} className="cartElement">

        <h5>{product}</h5>
        <p>Cantidad: {quantity}</p>
        <p>Precio x Unidad: ${price}</p>
        <p>Subtotal: ${quantity * price}</p>
        <button className="btn btn-primary" onClick={() => removerItemDelCarrito(id)}>X</button>

    </div>
  )
}

export default CartItem