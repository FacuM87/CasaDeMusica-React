
import { useState, useEffect } from "react";
import traerData from "../../data/traerData";
import Items from "../Items/Items";

const ItemListContainer = () => {
    
    const [productos, setProductos]= useState ([])
    console.log(productos);

    useEffect(() => {
      traerData()
        .then((response) => {
            setProductos(response);
        })
    }, [])
    
    
    return(
        <div>
            <Items productos={productos} />
        </div>
    )
}

export default ItemListContainer