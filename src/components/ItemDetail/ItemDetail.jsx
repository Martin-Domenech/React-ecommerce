import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsId } from '../../../data/asyncMocks'
import { ButtonMoreLess } from '../ButtonMoreLess/ButtonMoreLess'
import { FaShoppingCart } from "react-icons/fa";
import { IoHomeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer';
import './ItemDetail.css'
import Context from '../../context/CartContext';
const imgPath = '../../../public/productosImg/'



export const ItemDetail = () => {
    const[producto, setProducto] = useState({})
    const { productoId } = useParams()
    const image = imgPath + producto.img
    const [count, setCount] = useState(1)

    const { addItem } = useContext(Context)

    const onAdd = (count) => {
        const { id, nombre, precio, stock, img } = producto
        const item = {
            id,
            nombre,
            precio,
            stock,
            img
        }
        addItem(item, count)
    }

    useEffect(() => {

        getProductsId(productoId)
            .then((prod) => setProducto(prod))
            .catch((error) => console.log(error))
    }, [])
    
    return(
        <div className='ContenedorDetail'>
            <section className="itemDetailCont">
                <div className="rutaDetail">
                    <Link to='/'>
                        <IoHomeOutline className='iconHome'/>
                    </Link>
                    <p>{'>'} {producto.nombre}</p>
                </div>
                <div className='detailProduct'>
                    <img src={image} alt={producto.nombre} className='imgProd'/>
                    <div className='infoProd'>
                        <h2 className='titleProd'>{producto.nombre}</h2>
                        <p className='precioProd'>${producto.precio}</p>
                        <p className='descriptionProd'>{producto.descripcion}</p>
                        <ul className='variedadProd'>
                            <li ><span>TIPO: </span>{producto.tipo}</li>
                            <li ><span>VARIEDAD: </span>{producto.categoria}</li>
                            <li ><span>ORIGEN: </span>{producto.origen}</li>
                        </ul>
                        <div className='comprar'>
                            <div className='btnMoreLess'>
                            <ButtonMoreLess  producto={producto} count={count} setCount={setCount}/>
                            </div>
                            <Link to='/cart'>
                            <button type='button' className='btnBuy' onClick={() => onAdd(count)} > <FaShoppingCart className='icon-cart'/>Comprar</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}