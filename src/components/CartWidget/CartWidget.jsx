import cart from "./assets/cart.svg"

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img src={cart} alt="carrito" />
            <p>0</p>
        </div>       
    )
}

export default CartWidget 