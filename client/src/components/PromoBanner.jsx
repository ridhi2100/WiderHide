import { Link } from "react-router-dom";
import "./PromoBanner.css";

function PromoBanner() {
  return (
    <section className="promo">

      <div className="promo-overlay">

        <span className="promo-tag">
          Limited Time Offer
        </span>

        <h1>SUMMER SALE</h1>

        <p className="pie">
          Discover Premium Leather Accessories
          Crafted for Timeless Elegance.
        </p>

        <Link to="/belts">
          <button className="promo-btn">
            Shop Now
          </button>
        </Link>

      </div>

    </section>
  );
}

export default PromoBanner;