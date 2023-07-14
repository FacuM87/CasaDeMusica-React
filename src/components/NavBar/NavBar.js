import CartWidget from "../CartWidget/CartWidget"
import logo from "../NavBar/assets/logo.png"

const NavBar = () => {
    return (
        <nav className="d-flex justify-content-between mb-4">
            <div>
                <img src={logo} alt="logo" className="logoSize" />
            </div>
            <div className="navList">
                <ul className="row ">
                    <li className="col">
                        <a href="">Instrumentos</a>
                    </li>
                    <li className="col">
                        <a href="">Audio</a>
                    </li>
                    <li className="col">
                        <a href="">Accesorios</a>
                    </li>
                    <li className="col">
                        <a href="" className="ofertasAnimation">Ofertas!</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
