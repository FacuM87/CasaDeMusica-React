import { useState } from "react"
import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo1.png"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    
    const [menuClass, setMenuClass] = useState(false)
    
    const menuHandleClick = () => { 
        setMenuClass(!menuClass)
    }

    let toggleMenuClass1 = "line1__bars-menu"
    let toggleMenuClass2 = "line2__bars-menu"
    let toggleMenuClass3 = "line3__bars-menu"

    if (menuClass){
        toggleMenuClass1 = "activeline1__bars-menu"
        toggleMenuClass2 = "activeline2__bars-menu"
        toggleMenuClass3 = "activeline3__bars-menu"
    }

    return (
        <nav className="mb-4">
            <div className="logoMedia">
                <Link to={"/"}> <img src={logo} alt="logo" className="logo" /> </Link>
            </div>
            <div className="navList">
                <ul className="row">
                    <li className="col">
                        <Link to={"/category/instrumentos"}  className="list-hoverfx">Instrumentos</Link>
                    </li>
                    <li className="col">
                       <Link to={"/category/audio"} className="list-hoverfx">Audio</Link>
                    </li>
                    <li className="col">
                        <Link to={"/category/accesorios"} className="list-hoverfx">Accesorios</Link>
                    </li>
                    <li className="col">
                        <Link to={"/category/ofertas"} className="ofertasAnimation">Ofertas!</Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
            <div className="bars__menu" onClick={menuHandleClick}>
                <span className={`${toggleMenuClass1}`}></span>
                <span className={`${toggleMenuClass2}`}></span>
                <span className={`${toggleMenuClass3}`}></span>
            </div>
        </nav>
    )
}

export default NavBar
