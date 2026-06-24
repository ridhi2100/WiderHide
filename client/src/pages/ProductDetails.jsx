import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="product-page">
      <div className="product-left">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-right">
        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p>{product.description}</p>

        <button>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;