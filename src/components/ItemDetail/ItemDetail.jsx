import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

const ItemDetail = ({id, img, product, description, price}) => {
  return (
    <div key={id} className="d-flex justify-content-center detalleProducto">
        <div className="sizeImg">
            <img src={img} alt={product} className="img-fluid"/> 
        </div>
        <div className="bodyDetail">
            <h4 className="mb-2">{product}</h4>
            <p>{description}</p>
            <p>${price}</p>
            <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("Cantidad agregada "+quantity)}></ItemCount>
        </div>
    </div>
  )
}

export default ItemDetail