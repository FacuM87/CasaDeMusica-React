import {createContext, useState} from 'react'

export const CartContext = createContext({
    carrito:[]
})

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    console.log(carrito);

    const vaciarCarrito = () => {setCarrito ([])}

    const agregarItemAlCarrito = (item, quantity) => {
        const prodEnCarrito = carrito.find((producto) => producto.id === item.id)

        if (quantity > 0) {
            prodEnCarrito? prodEnCarrito.quantity+=quantity : setCarrito([...carrito, {...item, quantity}])
            console.log(carrito);
        } else{
            console.log("cantidad inválida");
        }        
    }
    
    const removerItemDelCarrito = (itemId) => {
        const nuevoCarrito = carrito.filter(item => item.id !== itemId)
        setCarrito(nuevoCarrito)
    }

    const total = () => {
        return carrito.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

 return (
    <CartContext.Provider value={{carrito, vaciarCarrito, agregarItemAlCarrito, removerItemDelCarrito, total }}>
        { children }
    </CartContext.Provider>
 )

}