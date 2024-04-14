import React from 'react';

import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="carrito">
            <a href="#">Carrito <FaShoppingCart /></a>
        </div>
        )
}

export default CartWidget;
