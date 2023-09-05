import React, { useContext, useState } from 'react'
import "./Checkout.css"
import { CartContext } from '../../CartContext/CartContext'
import CheckoutItems from './CheckoutItems/CheckoutItems'
import { useForm } from "react-hook-form"
import { db } from "../../config/firebase"
import { collection, addDoc } from 'firebase/firestore'
import ScaleLoader from "react-spinners/ScaleLoader"
import Lottie from "lottie-react"
import lottieAnimation from "./assets/lottieAnimation.json"



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
                <ScaleLoader color={"#c27e3a"} size={150} className="mt-5"/>
            </main>
        )
    }

    if (ordenID) {
        return (
            <main className="d-flex justify-content-center align-center">
                <div className="compraFinalizada">
                    <div>
                        <h1>Su compra ha sido generada con éxito!</h1>
                        <p>El ID de su compra es: {ordenID}</p>
                    </div> 
                    <div className="gifContainer">
                        <Lottie animationData={lottieAnimation} />
                    </div>
                </div>
            </main>
        )
    } 

  return (
    <main className="checkoutContainer">
        <section>
            <form className="form" onSubmit={handleSubmit(ordenDeCompra)}> 
                <label>Nombre: 
                    <input type="text" {...register("nombre", {required: true})}/>
                </label>
                <label>Apellido: 
                    <input type="text" {...register("apellido", {required: true})}/>
                </label>
                <label>N° de Contacto
                    <input type="phone" {...register("teléfono", {required: true, maxLength: 15})}/>
                </label>
                <label>Email: 
                    <input type="email" {...register("mail", {required: true})}/>
                </label>
                <button type="submit" className="mt-4" >Comprar!</button>
            </form>    
        </section>
        <section className="resumen">
            <div className="resumenPort">
                <h5>Resúmen de Compra</h5>
                <p>Total: ${total()}</p>
            </div>
            {carrito.map((item) => <CheckoutItems key={item.id} {...item}/>)}
        </section>
    </main>
  )
}

export default Checkout