import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="container">
            <h3>Casa de Música</h3>
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