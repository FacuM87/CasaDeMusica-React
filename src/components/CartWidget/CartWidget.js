import cart from "./assets/cart.svg"

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img src={cart} alt="carrito" />
            0
        </div>
            
    )
}

export default CartWidget 