import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Vampire Coffee
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link text-light" to="/">
            Home
          </Link>
          <Link className="nav-link text-light" to="/shop">
            Shop
          </Link>
          <Link className="nav-link text-light" to="/cart">
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;