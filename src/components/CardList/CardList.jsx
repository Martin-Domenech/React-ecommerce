/* eslint-disable react/prop-types */
import "./Card.css";
import { Link } from "react-router-dom";
const pathProducts = '../../../public/productosImg/'
import { FaShoppingCart } from "react-icons/fa";


export default function CardList({ nombre, precio, img, id }) {
  const imgProducts = pathProducts + img



  return (
    <Link to={`producto/${id}`}>
      <section className="item">
        <div className="img-container">
          <img src={imgProducts} alt={nombre} />
          </div>
        <h2 className="title_card">{nombre}</h2>
        <p className="precio">${precio}</p>
        <div className="cardFooter">
          <button className="addCart">
            <FaShoppingCart className="icon-carrito"/> Añadir al carrito
          </button>
        </div>
      </section>
    </Link>
  );
}
