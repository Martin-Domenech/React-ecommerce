/* eslint-disable react/prop-types */
import "./ItemListConteiner.css"
import imgHeader1 from '../../assets/header1.jpg'
import imgHeader2 from '../../assets/header2.jpg'
import imgHeader4 from '../../assets/header4.jpg'
import imgEnvio from '../../assets/envio.jpg'
import { ItemList } from "../ItemList/ItemList.jsx";
import { ItemPaginaPrincipal } from "../ItemsPaginaPrincipal/ItemsPaginaPrincipal.jsx"
import { useLocation } from 'react-router-dom';
import { useState, useEffect} from "react"



const ItemListContainer = () => {
    const location = useLocation()
    const [paginaPrincipal, setPaginaPrincipal] = useState(true)

    useEffect(()=>{
        const currentPath = location.pathname
        if (currentPath === '/'){
            setPaginaPrincipal(true)
        }else{
                setPaginaPrincipal(false)
        }
    }, [location])

    return (
         <section className="itemListContainer">
            <div id="carouselExampleRide" className="carousel slide imgHeader" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img src={imgHeader2} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={imgHeader4} className="d-block w-100" alt="..."></img>
                     </div>
                    <div className="carousel-item ">
                        <img src={imgHeader1} className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
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