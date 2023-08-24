
import "./itemList.css"
import Item from "../Item/Item"

function ItemList({productos}) {
  return (
    <div className="container tarj-container justify-content-center">
            {productos.map((producto) =>
              <Item {...producto}/>
              )                
            }
    </div>
  )
}

export default ItemList