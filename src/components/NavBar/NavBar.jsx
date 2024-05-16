import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import logo from "../../assets/logo-3.png"
import { Link } from "react-router-dom";


const NavBar = () => {

    
    return (
        <section className="navbar-x">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid container-navbar ">
                    <Link to='/'><img src={logo} alt="logo de web" className="logoNavBar"/></Link>
                    <button id="navbarCollapseButton" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav links-navbar">
                            <li className="nav-item">
                                <Link to='/'> Inicio </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/categoria/Blend'>Blend</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className=" dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Varietales
                                </a>
                                <ul className="dropdown-menu bg-dark text-light">
                                    <li><Link to='/categoria/Malbec' className="dropdown-item text-light" >Malbec</Link></li>
                                    <li><Link to='/categoria/Syrah' className="dropdown-item text-light" >Syrah</Link></li>
                                    <li><Link to='/categoria/Cabernet Sauvignon' className="dropdown-item text-light" >Cabernet Sauvignon</Link></li>
                                    <li><Link to='/categoria/Cabernet Franc' className="dropdown-item text-light" >Cabernet Franc</Link></li>
                                    <li><Link to='/categoria/Merlot' className="dropdown-item text-light" >Merlot</Link></li>
                                    <li><hr className="dropdown-divider bg-darck"></hr></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="input">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                                <button className="btn-buscar" type="submit">Buscar</button>
                            </form>
                            <CartWidget />
                        </div>
                        
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default NavBar;


