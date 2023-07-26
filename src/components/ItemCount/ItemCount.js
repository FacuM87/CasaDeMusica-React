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
        <div className='contador'>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-primary' onClick={decrement}>-</button>
                <p className=''>{quantity}</p>
                <button className='btn btn-primary' onClick={increment}>+</button>
            </div>
            <div>
                <button className='btn btn-primary' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}


export default ItemCount
