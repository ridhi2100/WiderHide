import ProductCard from "./ProductCard";
import products from "../data/products";

function NewArrivals() {
  return (
    <section className="featured">

      <h2>New Arrivals</h2>

      <div className="grid">

        {products.slice(0, 4).map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default NewArrivals;