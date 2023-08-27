import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./itemDetailContainer.css";


function ItemDetailContainer() {
    
    const [item, setItem] = useState([])  
    const { id } = useParams()

   useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((response) => {
                setItem(
                { id: response.id, ...response.data()}
                );
            })
            .catch(error => {console.error(error);})

        }, [id])

  return (
        <ItemDetail {...item}/>
    )
}

export default ItemDetailContainer