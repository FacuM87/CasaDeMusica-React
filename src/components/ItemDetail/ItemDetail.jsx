import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext';

const ItemDetail = ({id, img, product, description, price, stock}) => {

    const {agregarItemAlCarrito} = useContext(CartContext)

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [volver, setVolver] = useState(false)

    const handleOnAdd = (quantity) => {
        setCantidadAgregada(quantity)
        const item = {id, product, description, price, stock}
        agregarItemAlCarrito(item, quantity)    
    }
    
    // -- REVISAR -- //
    const handleClick = () => {   
       setVolver(!volver)
       console.log(volver)
    }
    // -- REVISAR -- //

  return (
    <div key={id} className="d-flex justify-content-center detalleProducto">
        <div className="sizeImg">
            <img src={img} alt={product} className="img-fluid"/> 
        </div>
        <div className="bodyDetail">
            <h4 className="mb-2">{product}</h4>
            <p>{description}</p>
            <p>${price}</p>
            {
                cantidadAgregada > 0 ? 
                (<Link to="/cart"><button className="btn2">Terminar Compra</button></Link>) 
                : (<ItemCount initial={0} stock={stock} onAdd={handleOnAdd}></ItemCount>)      
            }    
        </div>
    </div>
  )
}

export default ItemDetail