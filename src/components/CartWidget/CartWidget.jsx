import React from "react"
import "./CartWidget.css"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { img } from "./assets/img"

const CartWidget = () => {

    const { cantidadesEnCarrito } = useContext(CartContext)

    return (
        <div className="cartWidgetContainer">
            <NavLink to={"/cart"} className="d-flex widget">
                <img src={cantidadesEnCarrito() > 0 ? img.minecartLoaded : img.minecart} alt="carrito" />
                <p className={cantidadesEnCarrito()==0? "invisible" : "ms-1"} >{cantidadesEnCarrito()}</p>
            </NavLink>
        </div>       
    )
}

export default CartWidget 