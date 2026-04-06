import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src={product.imagen}
        className="card-img-top"
        alt={product.nombre}
      />

      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">${Number(product.precio).toLocaleString("es-CL")}</p>

        <button
          className="btn btn-primary"
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;