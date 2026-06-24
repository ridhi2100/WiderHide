import ProductCard from "./ProductCard";
import products from "../data/products";

function BestSellers() {
  return (
    <section className="featured">
      <h2>Best Sellers</h2>

      <div className="grid">
        {products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default BestSellers;