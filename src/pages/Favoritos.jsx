import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProductCard from "../components/ProductCard";

function Favoritos() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/favoritos`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setFavoritos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token]);

  if (loading) return <p className="container mt-4">Cargando favoritos...</p>;

  return (
    <div className="container mt-4">
      <h1>Mis Favoritos ⭐</h1>
      {favoritos.length === 0 ? (
        <p>No tienes productos favoritos todavía. ¡Agrega algunos desde la tienda!</p>
      ) : (
        <div className="d-flex flex-wrap">
          {favoritos.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;