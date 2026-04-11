import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [ordered, setOrdered] = useState(false);

  const total = cart.reduce((sum, product) => sum + Number(product.precio), 0);

  const handleCheckout = () => {
    setOrdered(true);
  };

  if (ordered) {
    return (
      <div className="container mt-5 text-center">
        <h2>🧛 ¡Pedido confirmado!</h2>
        <p className="lead">Gracias por tu compra. Tu café oscuro está en camino.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>Carrito</h1>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((product, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{product.nombre} — ${Number(product.precio).toLocaleString("es-CL")}</span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(index)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center">
            <h5>Total: ${total.toLocaleString("es-CL")}</h5>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Confirmar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;