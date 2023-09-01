 
import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo1.png"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

const NavBar = () => {

    const [menuClass, setMenuClass] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    
    const menuHandleClick = () => { 
        setMenuClass(!menuClass)
        setMenuOpen(!menuOpen)
    }

    return (
        <header>
            <nav className="mb-4">
                <div className="logoMedia">
                    <NavLink to={"/"}> <img src={logo} alt="logo" className="logo" /> </NavLink>
                </div>
                <ul className={menuOpen? "navListOpen" : "navList"}>
                    <li>
                        <NavLink to={"/category/instrumentos"} activeclassname="active" className="list-hoverfx">Instrumentos</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/audio"} activeclassname="active" className="list-hoverfx">Audio</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/accesorios"} activeclassname="active" className="list-hoverfx">Accesorios</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/ofertas"} className="ofertasAnimation">Ofertas!</NavLink>
                    </li>
                </ul>
                
                <CartWidget />
                
                <div className="bars__menu" onClick={menuHandleClick}>
                    <span className={menuClass? "activeline1__bars-menu": "line1__bars-menu"}></span>
                    <span className={menuClass? "activeline2__bars-menu": "line2__bars-menu"}></span>
                    <span className={menuClass? "activeline3__bars-menu": "line3__bars-menu"}></span>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
