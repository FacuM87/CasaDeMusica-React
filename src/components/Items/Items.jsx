import { Link } from "react-router-dom"
import "./items.css"

function Items({productos}) {
  return (
    <div className="container tarj-container">
            {productos.map((producto) =>
            
                <div key={producto.id} className="tarjetas">   
                    <img src={producto.img} alt={producto.product}/>
                    <div className="bodyTarj">
                        <h6>{producto.product}</h6>
                        <p>Precio: ${producto.price}</p>
                        <Link className="btn btn-primary" to={`/item/${producto.id}`}>Mas Info</Link>
                    </div>
                </div>
              )                
            }
    </div>
  )
}

export default Items