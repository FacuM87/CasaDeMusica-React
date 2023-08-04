import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo1.png"
/*import search from "./assets/search.svg"*/
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
                        <Link to={"/instrumentos"}  className="list-hoverfx">Instrumentos</Link>
                    </li>
                    <li className="col">
                       <Link to={"/audio"} className="list-hoverfx">Audio</Link>
                    </li>
                    <li className="col">
                        <Link to={"/accesorios"} className="list-hoverfx">Accesorios</Link>
                    </li>
                    <li className="col">
                        <Link to={"/ofertas"} className="ofertasAnimation">Ofertas!</Link>
                    </li>
                    {/* <li className="col position-relative">
                        <input className="search-bar" placeholder="Ingrese su búsqueda"/>
                        <button className="search-btn position-absolute"><img src={search} alt="search" /></button>
                    </li> */}
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
