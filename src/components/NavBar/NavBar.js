import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Casa de Música</h3>
            <div>
                <button>Instrumentos</button>
                <button>Audio</button>
                <button>Ofertas</button>
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar