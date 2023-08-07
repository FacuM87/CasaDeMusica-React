import { useParams } from "react-router-dom";
import { itemPorID } from "../../data/traerData";
import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./itemDetail.css"


function ItemDetail() {
    
    const [item, setItem] = useState([])  
    const { id } = useParams()

   useEffect(() => {

    itemPorID(Number(id))
        .then((response) => {
            setItem(response);   
        })
    
  }, [id])
  
  return (
    <div className="d-flex justify-content-center detalleProducto">
        <div>
            <img src={item.img} alt={item.product}></img> 
        </div>
        <div className="bodyDetail">
            <h4>{item.product}</h4>
            <p>{item.description}</p>
            <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("Cantidad agregada "+quantity)}></ItemCount>
        </div>
    </div>
  )
}

export default ItemDetail