import React from 'react'
import "./CheckoutItems.css"

const CheckoutItems = ({product, quantity, price}) => {

  return (
    <div className="resumenInfo">
        <p>{product}</p>
        <p>{quantity}u</p>
        <p>${price * quantity}</p>
    </div>
  )
}

export default CheckoutItems