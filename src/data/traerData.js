import data from "./data.json";

const traerData = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}

export default traerData