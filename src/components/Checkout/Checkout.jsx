import React, { useContext, useState } from 'react'
import "./Checkout.css"
import { CartContext } from '../../CartContext/CartContext'
import CheckoutItems from './CheckoutItems/CheckoutItems'
import { useForm } from "react-hook-form"
import { db } from "../../config/firebase"
import { collection, addDoc } from 'firebase/firestore'
import ScaleLoader from "react-spinners/ScaleLoader"


const Checkout = () => {

    const { register, handleSubmit } = useForm()
    const { carrito, total, vaciarCarrito } = useContext(CartContext)
    const [ ordenID, setOrdenID ]  = useState("") 
    const [ loader, setLoader ] = useState(false)

    const ordenDeCompra = (info) => {
        setLoader(true)
        const orden={
            fecha: new Date().toLocaleString(),
            cliente: info,
            productos: carrito,
            montoTotal: total()
        }
        console.log(orden);

        const ordenesRef = collection(db, "ordenesDeCompra")
        addDoc(ordenesRef, orden)
            .then((data) =>{ 
                setOrdenID(data.id)
                setTimeout(()=>{ setLoader(false) }, 1000)   
            })
            .catch((error) => 
                {setLoader(false)
                console.log(error)}
            )
        
        console.log(ordenID);

        vaciarCarrito()
    }

    if (loader){
        return (
            <main className="loader">
                <ScaleLoader color={"#c27e3a"} size={150}/>
            </main>
        )
    }

    if (ordenID) {
        return (
            <main className="compraFinalizada">
                <h1>Su compra ha sido generada con éxito!</h1>
                <p>El ID de su compra es: {ordenID}</p>
            </main>
        )
    } 

  return (
    <main className="checkoutContainer">
        <section className="resumen">
            <div className="resumenPort">
                <h5>Resúmen de Compra</h5>
                <p><strong>Total: ${total()}</strong></p>
            </div>
            {carrito.map((item) => <CheckoutItems key={item.id} {...item}/>)}
        </section>
        <section>
            <form className="form" onSubmit={handleSubmit(ordenDeCompra)}> 
                <label>Nombre: 
                    <input type="text" {...register("nombre")} required/>
                </label>
                <label>Apellido: 
                    <input type="text" {...register("apellido")} required/>
                </label>
                <label>N° de Contacto
                    <input type="phone" {...register("teléfono")} required/>
                </label>
                <label>Email: 
                    <input type="email" {...register("mail")} required/>
                </label>
                <button type="submit" className="mt-4" >Comprar!</button>
            </form>    
        </section>
    </main>
  )
}

export default Checkout