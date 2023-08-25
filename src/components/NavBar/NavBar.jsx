 
import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo1.png"
import "./NavBar.css"
import { Link } from "react-router-dom"
import { useState } from "react"

const NavBar = () => {

    const [menuClass, setMenuClass] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    
    const menuHandleClick = () => { 
        setMenuClass(!menuClass)
        setMenuOpen(!menuOpen)
    }

    let cambiarLine1Class = "line1__bars-menu"
    let cambiarLine2Class = "line2__bars-menu"
    let cambiarLine3Class = "line3__bars-menu"

    if (menuClass){
        cambiarLine1Class = "activeline1__bars-menu"
        cambiarLine2Class = "activeline2__bars-menu"
        cambiarLine3Class = "activeline3__bars-menu"
    }

    return (
        <nav className="mb-4">
            <div className="logoMedia">
                <Link to={"/"}> <img src={logo} alt="logo" className="logo" /> </Link>
            </div>
            <ul className={menuOpen? "navListOpen" : "navList"}>
                <li>
                    <Link to={"/category/instrumentos"}  className="list-hoverfx">Instrumentos</Link>
                </li>
                <li>
                   <Link to={"/category/audio"} className="list-hoverfx">Audio</Link>
                </li>
                <li>
                    <Link to={"/category/accesorios"} className="list-hoverfx">Accesorios</Link>
                </li>
                <li>
                    <Link to={"/category/ofertas"} className="ofertasAnimation">Ofertas!</Link>
                </li>
            </ul>
            
            <CartWidget />
            
            <div className="bars__menu" onClick={menuHandleClick}>
                <span className={`${cambiarLine1Class}`}></span>
                <span className={`${cambiarLine2Class}`}></span>
                <span className={`${cambiarLine3Class}`}></span>
            </div>
        </nav>
    )
}

export default NavBar
