import './ItemList.css'
import Card from '../Card/Card.jsx'
import { useState, useEffect } from 'react' 
import { getProducts, getProductsCategory } from "../../../data/asyncMocks.js"
import { useParams } from "react-router-dom"
import { Footer } from '../Footer/Footer.jsx'

export const ItemList = () => {
    const [products, setProducts] = useState([])
    const { categoriaId } = useParams()


    useEffect(()=>{
        const dataProductos = categoriaId ? getProductsCategory(categoriaId) : getProducts()

        dataProductos
        .then((el) => setProducts(el))
        .catch((error) => console.log(error))
    }, [categoriaId])

    return(
        <section className="itemlist">
            <div className="cards_cont">
                <section className="cards">
                    {
                        products.map(({ id, nombre, precio, categoria, img }) => (
                            <Card
                                key={id}
                                id={id}
                                nombre={nombre}
                                precio={precio}
                                categoria={categoria}
                                img={img}
                            />
                        ))
                    }
                </section>
            </div>
            <Footer />
        </section>
        
    )
}