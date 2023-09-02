import React, { useContext } from 'react'
import "./Cart.css"
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const {carrito, vaciarCarrito, total} = useContext(CartContext)

    if (carrito.length===0) {
        return (
            <main className="carritoVacioContainer">
                <div className="carritoVacio">
                    <h1>Carrito Vacío</h1>
                    <Link to={"/"} element={<ItemListContainer/>} className="ps-3"><button className="btn btn-primary">Volver al Catálogo</button></Link>
                </div> 
            </main>
        )
    } else {
        return(
        <main className="d-flex">
            <div className="cartItemsContainer"> 
                <div className="d-flex justify-content-around">
                    <div>
                        <p className="total">Total: ${total()}</p>
                    </div>
                    <div className="vaciarBtnContainer">
                        <Link to={"/checkout"}><button className="btn btn-primary m-2">Concretar Compra!</button></Link>
                        <button className="btn btn-primary" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                    </div>
                </div>
                {carrito.map((item) => <CartItem key={item.id} {...item}/>)}
            </div>
        </main>)
    }
}

export default Cart