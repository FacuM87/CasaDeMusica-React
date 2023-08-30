import React, { useContext } from 'react'
import "./Checkout.css"
import { CartContext } from '../../CartContext/CartContext'
import CheckoutItems from './CheckoutItems/CheckoutItems'
import { useForm } from "react-hook-form"
import { db } from "../../config/firebase"
import { collection, addDoc } from 'firebase/firestore'

const Checkout = () => {

    const { register, handleSubmit } = useForm()
    const { carrito, total, vaciarCarrito } = useContext(CartContext)

    const ordenDeCompra = (info) => {
        const orden={
            fecha: new Date().toLocaleString(),
            cliente: info,
            productos: carrito,
            montoTotal: total()
        }
        console.log(orden);

        const ordenesRef = collection(db, "ordenesDeCompra")
        addDoc(ordenesRef, orden)

        vaciarCarrito()
    }

  return (
    <div className="checkoutContainer">
        <div className="resumen">
            <div className="resumenPort">
                <h5>Resúmen de Compra</h5>
                <p><strong>Total: ${total()}</strong></p>
            </div>
            {carrito.map((item) => <CheckoutItems key={item.id} {...item}/>)}
        </div>
        <div>
            <form className="form" onSubmit={handleSubmit(ordenDeCompra)}> 
                <label>Nombre: 
                    <input type="text" {...register("nombre")}/>
                </label>
                <label>Apellido: 
                    <input type="text" {...register("apellido")}/>
                </label>
                <label>N° de Contacto
                    <input type="phone" {...register("teléfono")}/>
                </label>
                <label>Email: 
                    <input type="email" {...register("mail")}/>
                </label>
                <button type="submit" className="mt-4">Comprar!</button>
            </form>    
        </div>
    </div>
  )
}

export default Checkout