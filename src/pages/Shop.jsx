import ProductCard from "../components/ProductCard";
import arabica from "../assets/images/arabica.jpg";
import blend from "../assets/images/blend.jpg";
import chocolate from "../assets/images/chocolate.jpg";


function Shop() {
  const products = [
    {
      id: 1,
      name: "Café Arábica Oscuro",
      price: 8990,
      image: arabica
    },
    {
      id: 2,
      name: "Blend Vampiro",
      price: 10990,
      image: blend
    },
    {
      id: 3,
      name: "Café Chocolate Intenso",
      price: 9990,
      image: chocolate
    }
  ];

  return (
    <div className="container">
      <h1 className="mt-4">Tienda</h1>

      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;