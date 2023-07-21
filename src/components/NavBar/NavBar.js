import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo1.png"
import search from "./assets/search.svg"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="d-flex justify-content-between mb-4">
            <div>
                <img src={logo} alt="logo" className="logoSize" />
            </div>
            <div className="navList">
                <ul className="row">
                    <li className="col">
                        <a href="" className="list-hoverfx">Instrumentos</a>
                    </li>
                    <li className="col">
                        <a href="" className="list-hoverfx">Audio</a>
                    </li>
                    <li className="col">
                        <a href="" className="list-hoverfx">Accesorios</a>
                    </li>
                    <li className="col">
                        <a href="" className="ofertasAnimation">Ofertas!</a>
                    </li>
                    <li className="col position-relative">
                        <input className="search-bar" placeholder="Ingrese su búsqueda"/>
                        <button className="search-btn position-absolute"><img src={search} alt="search" /></button>
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
