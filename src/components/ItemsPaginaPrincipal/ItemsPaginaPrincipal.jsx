import './ItemsPaginaPrincipal.css'
import Card from '../Card/Card.jsx'
import { useState, useEffect } from 'react' 
import { getProducts, getProductsCategory } from '../../../data/asyncMocks.js'
import { useParams } from 'react-router-dom'
import imgCuotas from '../../assets/cuotas.jpg'
import { Footer } from '../Footer/Footer.jsx'

export const ItemPaginaPrincipal = () => {
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
                <div className="hr-container">
                    <hr className="hr-line" />
                    <span className="hr-text">Nuestra recomendacion de Malbec</span>
                    <hr className="hr-line" />
                </div>
                <section className="cards">
                    {
                        products.filter(producto => producto.categoria === 'Malbec').slice(0, 6).map(({ id, nombre, precio, categoria, img }) => (
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
                <img src={imgCuotas} alt="cuotas" className='imgCuotas' />
                <div className="hr-container">
                    <hr className="hr-line" />
                    <span className="hr-text">Nuestra recomendacion de Syrah</span>
                    <hr className="hr-line" />
                 </div>
                <section className="cards">
                    {
                        products.filter(producto => producto.categoria === 'Syrah').slice(0, 6).map(({ id, nombre, precio, categoria, img }) => (
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
                <img src={imgCuotas} alt="cuotas" className='imgCuotas' />
                <div className="hr-container">
                    <hr className="hr-line" />
                    <span className="hr-text">Nuestra recomendacion de Cabernet Franc</span>
                    <hr className="hr-line" />
                 </div>
                <section className="cards">
                    {
                        products.filter(producto => producto.categoria === 'Cabernet Franc').slice(0, 6).map(({ id, nombre, precio, categoria, img }) => (
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
                <img src={imgCuotas} alt="cuotas" className='imgCuotas' />
                <div className="hr-container">
                    <hr className="hr-line" />
                    <span className="hr-text">Nuestra recomendacion de Cabernet Sauvignon</span>
                    <hr className="hr-line" />
                 </div>
                <section className="cards">
                    {
                        products.filter(producto => producto.categoria === 'Cabernet Sauvignon').slice(0, 6).map(({ id, nombre, precio, categoria, img }) => (
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