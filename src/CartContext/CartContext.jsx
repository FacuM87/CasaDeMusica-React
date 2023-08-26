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

        if (quantity===0) {
            console.log("cantidad inválida");
        } else{
            prodEnCarrito? prodEnCarrito.quantity+=quantity : setCarrito([...carrito, {...item, quantity}])
            console.log(carrito);
        }
        
    }
    
    const removerItemDelCarrito = (itemId) => {
        const nuevoCarrito = carrito.filter(item => item.id !== itemId)
        setCarrito(nuevoCarrito)
    }


 return (
    <CartContext.Provider value={{carrito, vaciarCarrito, agregarItemAlCarrito, removerItemDelCarrito }}>
        { children }
    </CartContext.Provider>
 )

}