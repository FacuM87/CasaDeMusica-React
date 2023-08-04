import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

function Layout() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer/>
        <Outlet/>
    </div>
  )
}

export default Layout