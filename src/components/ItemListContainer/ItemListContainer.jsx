
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

        const prod = collection(db, "productos");

        let consultaFirestore
        if (categoryId) {
            consultaFirestore = query(prod, where("category", "==", categoryId)) 
        } else { 
            consultaFirestore = prod 
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
            <main className="d-flex justify-content-center flex-column ">
                <div className="itemContainer">
                    <h1 className="text-center">{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h1>
                    <ItemList productos={productos} />
                </div>
            </main>
        )

    } else {   
    
        return(
            <main className="d-flex justify-content-center flex-column">
                <div className="itemContainer"> 
                    <h1 className="text-center">Catálogo de Productos</h1>
                    <ItemList productos={productos} />
                </div>
            </main>
        )
    }
}

export default ItemListContainer