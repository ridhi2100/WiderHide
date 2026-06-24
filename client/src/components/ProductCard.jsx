import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      className="card"
      to={`/product/${product.id}`}
    >
      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>
    </Link>
  );
}

export default ProductCard;