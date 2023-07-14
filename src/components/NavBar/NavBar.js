import CartWidget from "../CartWidget/CartWidget"
import logo from "../NavBar/assets/logo.png"

const NavBar = () => {
    return (
        <nav className="container">
            <img src={logo} alt="logo"/>
            <div className="d-flex justify-content-center gap-3 mb-4">
                <button className="btn btn-primary">Instrumentos</button>
                <button className="btn btn-primary">Audio</button>
                <button className="btn btn-primary">Ofertas</button>
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar