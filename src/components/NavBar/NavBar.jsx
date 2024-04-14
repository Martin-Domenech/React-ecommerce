import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import logo from "../../assets/logo.png"


const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo-titulo">
                <img className="logo" src={logo} alt="logo"></img>
                <h2 className="titulo">Vinoteca</h2>
            </div>
            <div >
                <ul className="links-navbar">
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Donde encontrarnos</a></li>
                </ul>
            </div>
            <CartWidget />

            
        </div>
    )
    
}

export default NavBar;


