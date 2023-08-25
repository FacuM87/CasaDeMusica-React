import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { db } from './config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1 className="position-absolute top-50 start-50 translate-middle">ERROR 404, NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
