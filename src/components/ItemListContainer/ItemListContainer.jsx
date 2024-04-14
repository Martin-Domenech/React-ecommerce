import React from "react";
import "./ItemListConteiner.css"
import CardList from "../CardList/CardList";

const productos = [{id: 1, nombre: 'Rutini', precio: '7.000', categoria: 'malbec', img: 'https://unavatar.io/carlos'},
                  {id: 2, nombre: 'Alma Mora', precio: '3.500', categoria: 'cabernet', img: 'https://unavatar.io/juan'},
                  {id: 3, nombre: 'El Gran Enemigo', precio: '19.000', categoria: 'cabernet frank', img: 'https://unavatar.io/maria'},
                  {id: 4, nombre: 'D.v. Catena', precio: '14.500', categoria: 'Pinot Noir', img: 'https://unavatar.io/claudia'}];

const ItemListContainer = ({title}) => {
    return (
        <div className="itemlist">
            <h1>{title}</h1>

            <section className="cards">
            {
                productos.map(({id, nombre, precio, categoria, img}) => {
                    return(
                        <CardList
                            key={id}
                            nombre={nombre}
                            precio={precio}
                            categoria={categoria}
                            img={img}
                        >
                        </CardList>
                    )
                })
            }
            </section>
        </div>
    )
};

export default ItemListContainer;