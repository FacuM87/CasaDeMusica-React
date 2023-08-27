
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemListContainer = () => {
    
    const [productos, setProductos]= useState ([])
    const { categoryId } = useParams()

    useEffect(() => {

        const productos = collection(db, "productos");

        let consultaFirestore
        if (categoryId) {
            consultaFirestore = query(productos, where("category", "==", categoryId)) 
        } else { 
            consultaFirestore = productos 
        }
  
        getDocs(consultaFirestore)
            .then((response) => {
                setProductos(
                response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                )
            })
            .catch(error => {console.error(error);})
    }, [categoryId])

    if (categoryId){

        return(         
            <div className="d-flex justify-content-center flex-column">
                <h1 className="text-center itemContainer">{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h1>
                <ItemList productos={productos} />
            </div>
        )

    } else {   
    
        return(
            <div className="d-flex justify-content-center flex-column">
                <h1 className="text-center itemContainer">Catálogo de Productos</h1>
                <ItemList productos={productos} />
            </div>
        )
    }
}

export default ItemListContainer