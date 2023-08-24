import { useParams } from "react-router-dom";
import { itemPorID } from "../../data/traerData";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemDetailContainer.css";


function ItemDetailContainer() {
    
    const [item, setItem] = useState([])  
    const { id } = useParams()

   useEffect(() => {

    itemPorID(Number(id))
        .then((response) => {
            setItem(response);   
        })
        .catch(error => {console.error(error);} )
    }, [id])
  
  return (
        <ItemDetail {...item}/>
    )
}

export default ItemDetailContainer