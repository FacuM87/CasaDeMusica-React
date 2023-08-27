import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'


const Item = ({id, img, product, price, category}) => {
  return (
    <div key={id} className="tarjetas"> 
        <div className="sizeImgItems"> 
            <img src={img} alt={product} className="img-fluid"/>
        </div>
        <div className="bodyTarj">
            <h6>{product}</h6>
            <p className="mb-0">Precio: ${price}</p>
            <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
            <Link className="btn btn-primary" to={`/item/${id}`}>Mas Info</Link>
        </div>
    </div>
  )
}

export default Item