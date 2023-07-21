import CartWidget from "../CartWidget/CartWidget"
import logo from "../NavBar/assets/logo1.png"
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
                    <li className="col">
                        <input />
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
