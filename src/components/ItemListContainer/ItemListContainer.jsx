/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListConteiner.css"
import CardList from "../CardList/CardList.jsx";
import { getProducts, getProductsCategory } from "../../../data/asyncMocks.js";
import imgHeader1 from '../../assets/vino3.jpg'
import imgHeader2 from '../../assets/vinos2.jpg'
import imgHeader3 from '../../assets/vino4.webp'
import imgEnvio from '../../assets/envio.jpg'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoriaId } = useParams()


    useEffect(()=>{
        const dataProductos = categoriaId ? getProductsCategory(categoriaId) : getProducts()

        dataProductos
        .then((el) => setProducts(el))
        .catch((error) => console.log(error))
    }, [categoriaId])

    return (
         <section>
            <div id="carouselExampleRide" className="carousel slide imgHeader" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img src={imgHeader1} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={imgHeader2} className="d-block w-100" alt="..."></img>
                     </div>
                    <div className="carousel-item ">
                        <img src={imgHeader3} className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="itemlist">
                <div className="cards_cont">
                    <img src={imgEnvio} alt="Envio y formas de pago" />
                    <section className="cards">
                    {
                        products.map(({id, nombre, precio, categoria, img}) => {
                            return(
                                <CardList
                                    key={id}
                                    id={id}
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
            </div>
        </section>
    )
};

export default ItemListContainer;