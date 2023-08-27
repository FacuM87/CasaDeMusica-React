import React from "react"
import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../CartContext/CartContext"
import img from "./assets/img"

const CartWidget = () => {

    const { carrito } = useContext(CartContext)
    const [ widgetNumber, setwidgetNumber ]  = useState(0)
    
    const quantities = carrito.map((producto) => producto.quantity)
    const cantProdCarrito = quantities.reduce((acc, quantity) => {return acc + quantity}, 0)
    useEffect(() => {setwidgetNumber(cantProdCarrito)}, [cantProdCarrito])

    return (
        <div className="cartWidget">
            <img src={cantProdCarrito > 0 ? img.minecartLoaded : img.minecart} alt="carrito" />
            <p>{widgetNumber}</p>
        </div>       
    )
}

export default CartWidget 