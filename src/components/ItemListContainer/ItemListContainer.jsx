import React from "react";
import "./ItemListConteiner.css"

const ItemListContainer = ({title}) => {
    return (
        <div className="itemlist">
            <h1>{title}</h1>
        </div>
    )
};

export default ItemListContainer;