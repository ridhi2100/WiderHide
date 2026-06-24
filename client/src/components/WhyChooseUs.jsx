import "./ChooseUs.css"
import { FaAward, FaShieldAlt, FaTruck, FaLock } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why">
      <h2>Why Choose WiderHide</h2>

      <p className="why-subtitle">
        Experience luxury craftsmanship, premium quality and exceptional service.
      </p>

      <div className="why-grid">

        <div className="why-card">
          <FaAward className="why-icon" />
          <h3>Premium Quality</h3>
          <p>
            Crafted from the finest materials with unmatched attention to detail.
          </p>
        </div>

        <div className="why-card">
          <FaTruck className="why-icon" />
          <h3>Fast Delivery</h3>
          <p>
            Quick and reliable shipping to ensure your products arrive safely.
          </p>
        </div>

        <div className="why-card">
          <FaLock className="why-icon" />
          <h3>Secure Payment</h3>
          <p>
            Multiple secure payment options for a safe shopping experience.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;