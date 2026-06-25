import { Link } from "react-router-dom";
import "./categories.css";

import beltImg from "../pages/images/kidBellet.jpeg";
import walletImg from "../pages/images/menWallet.png";

function Categories() {
  return (
    <section className="categories">

      <h2>SHOP BY CATEGORY</h2>

      <div className="category-container">

        <Link to="/belts" className="category-card">
          <img src={beltImg} alt="Belts" />

          <div className="category-info">
            <h3>Belts</h3>
            <p>Premium Leather Belt Collection</p>
          </div>
        </Link>

        {/* <Link to="/wallets" className="category-card">
          <img src={walletImg} alt="Wallets" />

          <div className="category-info">
            <h3>Wallets</h3>
            <p>Luxury Handcrafted Wallets</p>
          </div>
        </Link> */}

      </div>

    </section>
  );
}

export default Categories;