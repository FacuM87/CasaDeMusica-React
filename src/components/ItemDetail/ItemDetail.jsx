import React, { useContext, useState } from 'react';
import { toast } from "react-toastify";
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext';

const ItemDetail = ({id, img, product, description, price, stock}) => {

    const {agregarItemAlCarrito} = useContext(CartContext)
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [small , setSmall] = useState(false)

    const handleOnAdd = (quantity) => {
        setCantidadAgregada(quantity)
        const item = {id, product, description, price, stock, img}
        agregarItemAlCarrito(item, quantity)
        quantity===0? setSmall(true) : setSmall(false)
        quantity>0 && toast("Producto agregado al carrito")         
    }

  return (
    <main key={id} className="d-flex justify-content-center">
        <div className="d-flex justify-content-center detalleProducto"> 
            <div className="sizeImg">
                <img src={img} alt={product} className="img-fluid img-itemDetail"/> 
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
                    : (
                    <div className="d-flex flex-column">
                        <ItemCount initial={0} stock={stock} onAdd={handleOnAdd}></ItemCount>
                        <small className={small? "ps-3" : "d-none"}>La cantidad ingresada es inválida</small>
                   </div>
                    )      
                }    
            </div>
        </div>
    </main>
  )
}

export default ItemDetail