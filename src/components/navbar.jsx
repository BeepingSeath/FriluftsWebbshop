import './navbar.css'

function Navbar() {

    return (
        <nav>
            <a href="./menu"><span className="material-symbols-outlined"> menu </span></a>
            <h1>
                JOYCAMP
            </h1>
            <div>
                <a href="./search"><span className="material-symbols-outlined"> search </span></a>
                <a href="./cart"><span className="material-symbols-outlined"> shopping_cart </span></a>
            </div>
        </nav>
    )
}

export default Navbar