import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleFavoritos = () => {
    if (token) {
      navigate("/favoritos");
    } else {
      alert("Debes iniciar sesión o registrarte para ver tus favoritos 🧛‍♀️");
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Vampire Coffee
        </Link>

        <div className="navbar-nav me-auto">
          <Link className="nav-link text-light" to="/">
            Home
          </Link>
          <Link className="nav-link text-light" to="/shop">
            Shop
          </Link>
          <Link className="nav-link text-light" to="/cart">
            Cart ({cart.length})
          </Link>
          <button
            className="btn btn-link nav-link text-light"
            onClick={handleFavoritos}
          >
            ⭐ Favoritos
          </button>
        </div>

        <div className="d-flex gap-2">
          {token ? (
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Regístrate
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;