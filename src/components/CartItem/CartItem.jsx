import React, { useContext, useState } from 'react'
import "./CartItem.css"
import { CartContext } from '../../CartContext/CartContext'


const CartItem = ({id, product, quantity, price, img}) => {

    const { removerItemDelCarrito } = useContext(CartContext)
    const [ collapseItem , setCollapseItem ] = useState(false)

    const handleOnclick = () => {
            setCollapseItem(true)
            setTimeout(() => removerItemDelCarrito(id),200)
    }

  return (
    <div key={id} className={collapseItem? "cartElementCollapsed" : "cartElement"}>
        <div className="d-flex">
            <div className="cartItemImgSize">
                <img src={img} alt={product} className="img-fluid"/>  
            </div>
            <div>
                <h5>{product}</h5>
                <p>Cantidad: {quantity}</p>
            </div>
        </div>
        <div>
            <p>Precio x Unidad: ${price}</p>
            <p>Subtotal: ${quantity * price}</p>
        </div>
        <div className="buttonContainer">
            <button className="btn btn-primary" onClick={handleOnclick}>Quitar del Carrito</button>
        </div>
    </div>
  )
}

export default CartItem