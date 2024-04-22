/* eslint-disable react/prop-types */
import "./ItemListConteiner.css"
import imgHeader1 from '../../assets/header1.png'
import imgEnvio from '../../assets/envio.jpg'
import { ItemList } from "../ItemList/ItemList.jsx";
import { ItemPaginaPrincipal } from "../ItemsPaginaPrincipal/ItemsPaginaPrincipal.jsx"
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react"
import { Footer } from "../Footer/Footer.jsx";



const ItemListContainer = () => {
    const location = useLocation()
    const [paginaPrincipal, setPaginaPrincipal] = useState(true)

    useEffect(()=>{
        const currentPath = location.pathname
        if (currentPath === '/'){
            setTimeout(() => {
                setPaginaPrincipal(true);
            }, 900);
            
        }else{
            setTimeout(() => {
                setPaginaPrincipal(false);
            }, 1100);
        }
    }, [location])


    return (
         <section className="itemListContainer">
            <div id="carouselExampleRide" className="carousel slide imgHeader" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img src={imgHeader1} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={imgHeader1} className="d-block w-100" alt="..."></img>
                     </div>
                    <div className="carousel-item ">
                        <img src={imgHeader1} className="d-block w-100" alt="..."></img>
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
            <img src={imgEnvio} className="imgEnvio" alt="Envio y formas de pago" />
            
            {
                paginaPrincipal ? (
                    <ItemPaginaPrincipal />
                ) : (
                    <ItemList />
                )
            }
        </section>
    )
};

export default ItemListContainer;