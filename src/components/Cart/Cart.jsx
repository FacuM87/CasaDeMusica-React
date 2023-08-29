import React, { useContext } from 'react'
import "./Cart.css"
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const {carrito} = useContext(CartContext)

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
            {carrito.map((item) => <CartItem key={item.id} {...item}/>)}
            <Link to={"/checkout"}><button className="btn btn-primary">Checkout</button></Link>
        </div>)
    }
}

export default Cart