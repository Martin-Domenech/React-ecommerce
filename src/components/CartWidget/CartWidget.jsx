import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="carrito">
            <a className='carrito-btn' href="#">Carrito <FaShoppingCart /></a>
        </div>
        )
}

export default CartWidget;
