
import { useState, useEffect } from "react";
import {traerData} from "../../data/traerData";
import Items from "../Items/Items";
import "./itemListContainer.css"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    
    const [productos, setProductos]= useState ([])
    const { categoryId } = useParams()

    useEffect(() => {
      traerData()
        .then((response) => {
            
            if(categoryId){
                setProductos(response.filter((elementos) => elementos.category.toUpperCase() === categoryId.toUpperCase()))
            }else{setProductos(response)} 
        })
    }, [categoryId])
    
    
    return(
        <div>
            <h1 className="text-center itemContainer">Catálogo de Productos</h1>
            <Items productos={productos} />
        </div>
    )
}

export default ItemListContainer