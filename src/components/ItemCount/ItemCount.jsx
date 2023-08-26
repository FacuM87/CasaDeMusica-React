import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    function increment (){
        (quantity<stock) && setQuantity(quantity+1)
    }

    function decrement (){
        (quantity>0) && setQuantity(quantity-1)
    }

    return(
        <div className="contador">      
            <button className= "btn1" onClick={decrement}>-</button>
            <p className="mb-0">{quantity}</p> 
            <button className= "btn1" onClick={increment}>+</button>   
         
            <button className="btn2" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount