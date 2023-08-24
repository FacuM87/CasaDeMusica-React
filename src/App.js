import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { db } from './config/firebase'
import { getDocs, collection } from 'firebase/firestore'


function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
          <Route path="/item/:id" element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
