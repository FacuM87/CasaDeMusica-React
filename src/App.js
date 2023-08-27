import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './CartContext/CartContext'
import Cart from './components/Cart/Cart'


function App() {
  return (  
    <BrowserRouter>
      <CartProvider>
          <NavBar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="*" element={<h1 className="position-absolute top-50 start-50 translate-middle">ERROR 404, NOT FOUND</h1>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
