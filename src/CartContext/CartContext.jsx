import {createContext, useState} from 'react'

export const CartContext = createContext({
    carrito:[]
})

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    console.log(carrito);

    const vaciarCarrito = () => {setCarrito ([])}

    const productoEnCarrito = (itemId) => {}

    const agregarItemAlCarrito = (item, quantity) => {
        setCarrito([...carrito, {...item, quantity}])
        console.log(carrito);
    }
    
    const removerItemDelCarrito = () => {}


 return (
    <CartContext.Provider value={{carrito, vaciarCarrito, agregarItemAlCarrito, productoEnCarrito, removerItemDelCarrito }}>
        { children }
    </CartContext.Provider>
 )

}