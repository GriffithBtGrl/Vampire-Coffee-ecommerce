import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";

function Home() {
  return (
    <div className="container mt-4">
      <div
        className="hero text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 15, 10, 0.8), rgba(26, 15, 10, 0.9)), url(${hero})`
        }}
      >
        <h1 className="display-4 mb-3">Vampire Coffee</h1>

        <p className="lead">
          El sabor oscuro que despierta la noche.
        </p>

        <p className="mb-4">
          Descubre nuestros granos seleccionados, tostados para los amantes
          del café intenso y profundo.
        </p>

        <Link to="/shop" className="btn btn-primary">
          Ver productos
        </Link>
      </div>
    </div>
  );
}

export default Home;