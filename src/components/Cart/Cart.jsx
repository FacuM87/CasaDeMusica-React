import React, { useContext } from 'react'
import "./Cart.css"
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Cart = () => {

    const {carrito, removerItemDelCarrito} = useContext(CartContext)

    if (carrito.length===0) {
        return (
            <div className="position-absolute top-50 start-50 translate-middle"> 
                <h1>Carrito Vacío</h1>
                <Link to={"/"} element={<ItemListContainer/>}><button className="btn btn-primary">Volver al Catálogo</button></Link>
            </div>
        )
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
        <Link to={"/checkout"}><button className="btn btn-primary">Checkout</button></Link>
        </div>)
    }
}

export default Cart