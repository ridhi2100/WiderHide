import { Link } from "react-router-dom";
import "./BrandStory.css";

import storyImg from "../pages/images/formalbelt.png";

function BrandStory() {
  return (
    <section className="brand-story">

      <div className="brand-container">

        <div className="brand-image">
          <img
            src={storyImg}
            alt="WiderHide Story"
          />
        </div>

        <div className="brand-content">

         <span className="brand-tag">
  OUR HERITAGE
</span>

<h2>
  30+ Years of Trusted Craftsmanship
</h2>

<p>
  For more than three decades, WiderHide has been serving customers
  with premium leather accessories crafted for quality, durability,
  and timeless style. What began as a local leather goods business
  has grown into a trusted name across Delhi and Haryana.
</p>

<p>
  Today, our products are available through a network of 100+ retail
  stores, bringing premium belts, wallets, handbags, and accessories
  closer to customers throughout the region. Our commitment to quality
  craftsmanship and customer satisfaction remains at the heart of
  everything we create.
</p>

<p>
  To make shopping even more convenient, WiderHide products are also
  available on leading online marketplaces including Amazon and
  Flipkart, allowing customers across India to experience our premium
  collection from anywhere.
</p>

<div className="brand-stats">

  <div>
    <h3>30+</h3>
    <span>Years Experience</span>
  </div>

  <div>
    <h3>100+</h3>
    <span>Retail Stores</span>
  </div>

  <div>
    <h3>5000+</h3>
    <span>Happy Customers</span>
  </div>

  <div>
    <h3>Amazon</h3>
    <span>Online Store</span>
  </div>

  <div>
    <h3>Flipkart</h3>
    <span>Online Store</span>
  </div>

</div>

<Link to="/wallets">
  <button className="brand-btn">
    Explore Collection
  </button>
</Link>

        </div>

      </div>

    </section>
  );
}

export default BrandStory;