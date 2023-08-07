import data from "./data.json";

export const traerData = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}

export const itemPorID = (id) => {
    return new Promise((resolve) => {        
    
        const item = data.find((producto) => producto.id === id)
        item && resolve(item)
    
    })
}
