import Navbar from "../components/Navbar";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Women() {

 const womenProducts =
 products.filter(
  item => item.category === "women"
 );

 return (
  <>
   <Navbar />

   <section className="featured">

    <h2>Women Collection</h2>

    <div className="grid">

      {
       womenProducts.map(product => (
        <ProductCard
         key={product.id}
         product={product}
        />
       ))
      }

    </div>

   </section>
  </>
 );
}

export default Women;