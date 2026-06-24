import Navbar from "../components/Navbar";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Men() {

 const menProducts =
 products.filter(
  item => item.category === "men"
 );

 return (
  <>
   <Navbar />

   <section className="featured">

    <h2>Men Collection</h2>

    <div className="grid">

      {
       menProducts.map(product => (
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

export default Men;