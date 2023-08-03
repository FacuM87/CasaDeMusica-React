import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Instrumentos from "./pages/Instrumentos"
import Accesorios from "./pages/Accesorios"
import Audio from "./pages/Audio"
import Layout from "./pages/Layout"
import Ofertas from "./pages/Ofertas"


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="inicio" element={ <Inicio/> }/>
          <Route path="instrumentos" element={ <Instrumentos/> }/>
          <Route path="audio" element={ <Audio/> }/>
          <Route path="accesorios" element={<Accesorios/>}/>
          <Route path="ofertas" element={<Ofertas/>}/>
        </Route>
      </Routes>
      <ItemListContainer greeting={"Bienvenido a Casa de Música!"}/>
      <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("Cantidad agregada "+quantity)}></ItemCount>
    </BrowserRouter>
  )
}

export default App;
