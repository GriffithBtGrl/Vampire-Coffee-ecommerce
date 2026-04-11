import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { token } = useAuth();
  const [esFavorito, setEsFavorito] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  const handleFavorito = async () => {
    if (!token) {
      setMensaje("Debes iniciar sesión para agregar favoritos 🧛‍♀️");
      setTimeout(() => setMensaje(null), 3000);
      return;
    }

    if (esFavorito) {
      await fetch(`${import.meta.env.VITE_API_URL}/favoritos/${product.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      setEsFavorito(false);
      setMensaje("Eliminado de favoritos");
    } else {
      await fetch(`${import.meta.env.VITE_API_URL}/favoritos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ producto_id: product.id })
      });
      setEsFavorito(true);
      setMensaje("¡Agregado a favoritos!");
    }

    setTimeout(() => setMensaje(null), 2000);
  };

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src={product.imagen}
        className="card-img-top"
        alt={product.nombre}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{product.nombre}</h5>
          <button
            onClick={handleFavorito}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.4rem",
              cursor: "pointer",
              padding: "0"
            }}
            title={token ? "Agregar a favoritos" : "Inicia sesión para agregar favoritos"}
          >
            {esFavorito ? "⭐" : "☆"}
          </button>
        </div>

        {mensaje && (
          <div className={`alert py-1 px-2 mb-2 small ${esFavorito || mensaje.includes("Agregado") ? "alert-success" : "alert-warning"}`}>
            {mensaje}
          </div>
        )}

        <p className="card-text">${Number(product.precio).toLocaleString("es-CL")}</p>

        <button
          className="btn btn-primary w-100"
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;