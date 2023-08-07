import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo1.png"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
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
            <div className="bars__menu">
                <span className="line1__bars-menu"></span>
                <span className="line2__bars-menu"></span>
                <span className="line3__bars-menu"></span>
            </div>
        </nav>
    )
}

export default NavBar
