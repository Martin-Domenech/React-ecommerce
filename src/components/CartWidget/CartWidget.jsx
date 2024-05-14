import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import './CartWidget.css'
import { useContext } from "react";
import Context from "../../context/CartContext";

const CartWidget = () => {
    const {getQuantity} = useContext(Context)



    return (
        <div className="carrito">
            <Link className='carrito-btn' to='/cart'>Carrito ({getQuantity()})<FaShoppingCart /></Link>
        </div>
        )

        
}

export default CartWidget;
