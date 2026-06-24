import ProductCard from "./ProductCard";
import products from "../data/products";

function FeaturedProducts() {
  return (
    <section className="featured">

      <h2>Featured Products</h2>

      <div className="grid">

        {products.slice(0, 6).map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;