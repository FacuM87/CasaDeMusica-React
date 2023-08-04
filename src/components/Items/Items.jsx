import "./items.css"

function Items({productos}) {
  return (
    <div className="container tarj-container">
            {productos.map((producto) =>
            
                <div key={producto.id} className="tarjetas">   
                    <img src={producto.img}/>
                    <div className="bodyTarj">
                        <h6>{producto.product}</h6>
                        <p>${producto.price}</p>
                        <p>-cargar descripción-</p>

                    </div>
                </div>

                )
                
            }
    </div>
  )
}

export default Items