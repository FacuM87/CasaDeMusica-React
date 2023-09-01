import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext({
    carrito:[]
})

let carritoInicial
const carritoEnStorage = JSON.parse(sessionStorage.getItem("carrito"))
carritoEnStorage? carritoInicial = carritoEnStorage : carritoInicial= []

console.log(carritoInicial);


export const CartProvider = ({children}) => {


    const [carrito, setCarrito] = useState(carritoInicial)
    console.log(carrito);

    useEffect(() => {
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    const vaciarCarrito = () => {setCarrito ([])}

    const agregarItemAlCarrito = (item, quantity) => {
        const prodEnCarrito = carrito.find((producto) => producto.id === item.id)

        if (quantity > 0) {
            prodEnCarrito? prodEnCarrito.quantity+=quantity : setCarrito([...carrito, {...item, quantity}])
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

    const cantidadesEnCarrito = () => {
        return carrito.reduce((acc, item) => acc + item.quantity, 0);
    }

 return (
    <CartContext.Provider value={{carrito, vaciarCarrito, agregarItemAlCarrito, removerItemDelCarrito, total, cantidadesEnCarrito }}>
        { children }
    </CartContext.Provider>
 )

}