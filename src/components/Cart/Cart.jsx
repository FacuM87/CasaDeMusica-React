import React, { useContext } from 'react'
import "./Cart.css"
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const {carrito, vaciarCarrito} = useContext(CartContext)

    if (carrito.length===0) {
        return (
            <div className="position-absolute top-50 start-50 translate-middle"> 
                <h1>Carrito Vacío</h1>
                <Link to={"/"} element={<ItemListContainer/>}><button className="btn btn-primary">Volver al Catálogo</button></Link>
            </div>
        )
    } else {
        return(
        <div className="cartItemsContainer" >
            {carrito.map((item) => <CartItem key={item.id} {...item}/>)}
            <div className="">
                <Link to={"/checkout"}><button className="btn btn-primary m-2">Checkout</button></Link>
                <button className="btn btn-primary" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            </div>
        </div>)
    }
}

export default Cart