import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext';

const ItemDetail = ({id, img, product, description, price, stock}) => {

    const {agregarItemAlCarrito} = useContext(CartContext)

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const handleOnAdd = (quantity) => {
        setCantidadAgregada(quantity)
        const item = {id, product, description, price, stock, img}
        agregarItemAlCarrito(item, quantity)    
    }

  return (
    <main key={id} className="d-flex justify-content-center detalleProducto">
        <div className="sizeImg">
            <img src={img} alt={product} className="img-fluid"/> 
        </div>
        <div className="bodyDetail">
            <h4 className="mb-2">{product}</h4>
            <p>{description}</p>
            <p>${price}</p>
            {
                cantidadAgregada > 0 ? 
                (<div>
                    <Link to="/cart"><button className="btn2">Ver Carrito</button></Link>
                    <Link to="/"><button className="btn btn-primary">Volver al Catálogo</button></Link>
                </div>)
                : (<ItemCount initial={0} stock={stock} onAdd={handleOnAdd}></ItemCount>)      
            }    
        </div>
    </main>
  )
}

export default ItemDetail