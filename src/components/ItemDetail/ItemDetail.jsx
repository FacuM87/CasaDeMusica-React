import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Link } from 'react-router-dom';

const ItemDetail = ({id, img, product, description, price}) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const handleOnAdd = (quantity) => {setCantidadAgregada(quantity)}

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
                cantidadAgregada > 0 ? (<Link to="/cart"><button className="btn2">Terminar Compra</button></Link>) 
                : (<ItemCount initial={0} stock={10} onAdd={handleOnAdd}></ItemCount>)
                  
            }
            
        </div>
    </div>
  )
}

export default ItemDetail